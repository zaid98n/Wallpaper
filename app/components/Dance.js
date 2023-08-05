import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, ScrollView, TouchableOpacity, Modal, Dimensions } from 'react-native';
import styles from '../../styles';
import { FontAwesome } from '@expo/vector-icons';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import FullScreenImage from './FullScreenImage';

const Dance = () => {

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

    const API_KEY = 'Z2czjJRDYYfOQIHRlsrFU8KjeQCnUOgz591mdW2WnibUuEjkKWcmrqVE'; // Replace with your Pexels API key
    const BASE_URL = 'https://api.pexels.com/v1/search';
    const QUERY = 'dance';
    const PER_PAGE = 5; // Load 5 photos per page

    useEffect(() => {
        fetch(`${BASE_URL}?query=${QUERY}&per_page=${loadedPhotos}`, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.photos && data.photos.length > 0) {
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

            <ScrollView contentContainerStyle={styles.scrollContentContainer}>
                {/* <View>
                    <Text style={{ fontWeight: 'bold', textAlign: 'center', marginTop: 10, fontSize: 20, color: 'green' }}>Latest Wallpapers</Text>
                </View> */}
                {photos.length > 0 ? (
                    photos.map((photo) => (
                        <View key={photo.id} style={styles.imageContainer}>
                            <TouchableOpacity onPress={() => openFullScreen(photo)} style={[styles.postProfilePicture, { width: getImageWidthPercentage(90) }]}>
                                <Image
                                    //source={{ uri: photo.download_url }}
                                    source={{ uri: photo.src.large }}
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
                    imageUrl={selectedPhoto.src.large2x}
                    onClose={closeFullScreen}
                />
            )}
        </View>
    );
};

export default Dance;
