import React, { Component, useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TextInput, ScrollView, TouchableOpacity, Alert, Modal, Dimensions, Platform } from 'react-native';
import { MaterialIcons } from 'react-native-vector-icons';
import styles from '../../styles';
import { v4 as uuidv4 } from 'uuid';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesome } from '@expo/vector-icons';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
// import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import FullScreenImage from './FullScreenImage';

const Home = () => {

  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const screenWidth = Dimensions.get('window').width;

  const [photos, setPhotos] = useState([]);
  //const screenWidth = Dimensions.get('window').width; // Get the screen width

  const openFullScreen = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeFullScreen = () => {
    setSelectedPhoto(null);
  };

  useEffect(() => {
    fetch('https://api.slingacademy.com/v1/sample-data/photos')
      .then((response) => response.json())
      .then((data) => {
        // Assuming the API response is an object with a photos property
        if (data.photos && Array.isArray(data.photos)) {
          setPhotos(data.photos);
        }
      })
      .catch((error) => {
        console.error('Error fetching images:', error);
      });
  }, []);

  const handleReport = (photo) => {
    // Implement the logic for reporting the image here
    console.log('Reporting image:', photo.id);
  };

  const getImageWidthPercentage = (percentage) => {
    return (screenWidth * percentage) / 100;
  };

  const handleDownload = async (photo) => {
    try {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== 'granted') {
        console.error('Media library permission denied.');
        return;
      }
  
      const downloadDir = `${FileSystem.documentDirectory}Wallpapers/`;
      const dirInfo = await FileSystem.getInfoAsync(downloadDir);
      if (!dirInfo.exists) {
        await FileSystem.makeDirectoryAsync(downloadDir, { intermediates: true });
      }
  
      const downloadResult = await FileSystem.downloadAsync(photo.url, downloadDir + `${photo.id}.jpg`, {});
  
      const asset = await MediaLibrary.createAssetAsync(downloadResult.uri);
      console.log('Downloaded image saved to media library:', asset.uri);
      
    //   if (Constants.isDevice && Platform.OS === 'android') {
    //     const localNotification = {
    //       title: 'Download Complete',
    //       body: 'The image has been successfully downloaded to your gallery.',
    //     };
  
    //     await Notifications.presentNotificationAsync(localNotification);
    //   }

        setDownloadSuccess(true);
        setTimeout(() => setDownloadSuccess(false), 1000);
    } catch (error) {
      console.error('Error downloading image:', error);
    }
  };

  

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      <ScrollView contentContainerStyle={styles.scrollContentContainer}>
      <View>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', marginTop: 10, fontSize: 20, color: 'green' }}>Latest Wallpapers</Text>
      </View>
        {photos.length > 0 ? (
          photos.map((photo) => (
            <View key={photo.id} style={styles.imageContainer}>
              <TouchableOpacity onPress={() => openFullScreen(photo)} style={[styles.postProfilePicture, { width: getImageWidthPercentage(90) }]}>
                <Image
                  source={{ uri: photo.url }}
                  style={styles.image}
                  onError={(error) => console.error('Error loading image:', error)}
                />
              </TouchableOpacity>
              <View style={styles.buttonsContainer}>
                <TouchableOpacity onPress={() => handleDownload(photo)} style={styles.button}>
                  <FontAwesome name="download" size={20} color="black" />
                  <Text style={styles.buttonText}>Download</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleReport(photo)} style={styles.button}>
                  <FontAwesome name="exclamation-circle" size={20} color="black" />
                  <Text style={styles.buttonText}>Report</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        ) : (
          <Text>Loading...</Text>
        )}
      </ScrollView>
      {downloadSuccess && (
        <Modal animationType="fade" transparent visible={downloadSuccess}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>Download Successful!</Text>
            </View>
          </View>
        </Modal>
      )}

      {selectedPhoto && (
        <FullScreenImage
          imageUrl={selectedPhoto.url}
          onClose={closeFullScreen}
        />
      )}
    </View>
  );
};

export default Home;
