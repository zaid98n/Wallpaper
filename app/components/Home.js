import React, { useState, useEffect, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, ScrollView, TouchableOpacity, Modal, Dimensions, ActivityIndicator  } from 'react-native';
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

  //const [loadedPhotos, setLoadedPhotos] = useState(80);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0)
  const scrollViewRef = useRef();

  const scrollToTop = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: true });
    }
  };

  const openFullScreen = (photo) => {
    setSelectedPhoto(photo);1
  };

  const closeFullScreen = () => {
    setSelectedPhoto(null);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    scrollToTop();
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
      scrollToTop();
    }
  }; 

  const API_KEY = 'Z2czjJRDYYfOQIHRlsrFU8KjeQCnUOgz591mdW2WnibUuEjkKWcmrqVE'; // Replace with your Pexels API key
  const BASE_URL = 'https://api.pexels.com/v1/search';
  const QUERY = 'desktopwallpapers';
  const PER_PAGE = 80;

  

  useEffect(() => {
    fetch(`${BASE_URL}?page=${currentPage}&query=${QUERY}&per_page=${PER_PAGE}`, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.photos && data.photos.length > 0) {
          setPhotos(data.photos);
          setTotalPages(data.total_results); // Set the total pages based on the API response
        }
      })
      .catch((error) => {
        console.error('Error fetching images:', error);
      });
  }, [currentPage]);

  // const handleLoadMore = () => {
  //   setLoadedPhotos((prevLoadedPhotos) => prevLoadedPhotos + 10);
  // };

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

      const downloadResult = await FileSystem.downloadAsync(photo.src.original, downloadDir + `${photo.id}.jpg`, {});

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
      {/* <View>
          <Text style={{ 
            fontWeight: 'bold', textAlign: 'center', marginTop: 10, fontSize: 20, backgroundColor: '#323740',
            color: 'white', borderColor: '#246bfd', padding: 9, borderWidth: 0, borderRadius: 0}}>
              Latest Wallpapers</Text>
        </View> */}
        <ScrollView
        ref={scrollViewRef} // Set the ref for the ScrollView
        contentContainerStyle={styles.scrollContentContainer}
        onContentSizeChange={() => {}} // Don't need handleContentSizeChange anymore
      >
        
        {photos.length > 0 ? (
          photos.map((photo) => (
            <View key={photo.id} style={styles.imageContainer}>
              <TouchableOpacity onPress={() => openFullScreen(photo)} style={[styles.postProfilePicture, { width: getImageWidthPercentage(90) }]}>
                <Image
                  //source={{ uri: photo.download_url }}
                  source={{ uri: photo.src.medium }}
                  style={styles.image}
                  onError={(error) => console.error('Error loading image:', error)}
                />
              </TouchableOpacity>
              <View style={styles.buttonsContainer}>
                <TouchableOpacity onPress={() => handleDownload(photo)} style={styles.button}>
                  <FontAwesome name="download" size={20} color="white" />
                  <Text style={styles.buttonText}>Download</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleReport(photo)} style={styles.button}>
                  <FontAwesome name="exclamation-circle" size={20} color="white" />
                  <Text style={styles.buttonText}>Report</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        ) : (
          // <View style={styles.loaderScreen}>
          //   <Text style={styles.loader}>Loading...</Text>
          // </View>
          <View style={styles.loaderScreen}>
            <ActivityIndicator size="large" color="white" style={styles.loader} />
          </View>
        )}
        {/* <TouchableOpacity onPress={handleLoadMore}>
          <Text style={styles.loadMore} >Load More</Text>
        </TouchableOpacity> */}
        <View style={styles.paginationContainer}>
          <TouchableOpacity
            onPress={handlePreviousPage}
            style={[styles.paginationButton]}
            disabled={currentPage === 1}
          >
            <Text style={styles.paginationButtonText}>Previous</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleNextPage}
            style={[styles.paginationButton]}
            disabled={currentPage === Math.ceil(totalPages / PER_PAGE)}
          >
            <Text style={styles.paginationButtonText}>Next</Text>
          </TouchableOpacity>
        </View>
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
          imageUrl={selectedPhoto.src.large2x}
          onClose={closeFullScreen}
        />
      )}
    </View>
  );
};

export default Home;
