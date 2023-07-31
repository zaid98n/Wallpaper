import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, ScrollView, TouchableOpacity, Modal, Dimensions } from 'react-native';
import styles from '../../styles';
import { FontAwesome } from '@expo/vector-icons';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import FullScreenImage from './FullScreenImage';

const Home = () => {

  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const screenWidth = Dimensions.get('window').width;

  const [photos, setPhotos] = useState([]);

  const [loadedPhotos, setLoadedPhotos] = useState(5);

  const openFullScreen = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeFullScreen = () => {
    setSelectedPhoto(null);
  };

  useEffect(() => {
    fetch(`https://api.slingacademy.com/v1/sample-data/photos?limit=${loadedPhotos}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.photos && Array.isArray(data.photos)) {
          setPhotos(data.photos);
        }
      })
      .catch((error) => {
        console.error('Error fetching images:', error);
      });
  }, [loadedPhotos]);

  const handleLoadMore = () => {
    setLoadedPhotos((prevLoadedPhotos) => prevLoadedPhotos + 5);
  };

  const handleReport = (photo) => {
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
        <TouchableOpacity onPress={handleLoadMore}>
          <Text style={styles.loadMore} >Load More</Text>
        </TouchableOpacity>
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
