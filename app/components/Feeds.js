import React, { Component, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TextInput, ScrollView, TouchableOpacity, Alert, Modal, Dimensions } from 'react-native';
import { MaterialIcons } from 'react-native-vector-icons';
import styles from '../../styles';
import { v4 as uuidv4 } from 'uuid';
import Icon from 'react-native-vector-icons/FontAwesome';

const Feeds = () => {

    return (
        <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView contentContainerStyle={styles.scrollContentContainer}>
      <View>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', marginTop: 10, fontSize: 20, color: 'green' }}>Categories</Text>
      </View>
        <View style={[styles.imageContainer]}>
              <TouchableOpacity style={[styles.categoryPicture]}>
                <Image source={require('../../assets/zn.png')} style={[styles.image]} />
              </TouchableOpacity>
        </View>

        <View style={[styles.imageContainer]}>
              <TouchableOpacity style={[styles.categoryPicture]}>
                <Image source={require('../../assets/zn.png')} style={[styles.image]} />
              </TouchableOpacity>
        </View>

        <View style={[styles.imageContainer]}>
              <TouchableOpacity style={[styles.categoryPicture]}>
                <Image source={require('../../assets/zn.png')} style={[styles.image]} />
              </TouchableOpacity>
        </View>

        <View style={[styles.imageContainer]}>
              <TouchableOpacity style={[styles.categoryPicture]}>
                <Image source={require('../../assets/zn.png')} style={[styles.image]} />
              </TouchableOpacity>
        </View>

        <View style={[styles.imageContainer]}>
              <TouchableOpacity style={[styles.categoryPicture]}>
                <Image source={require('../../assets/zn.png')} style={[styles.image]} />
              </TouchableOpacity>
        </View>

        <View style={[styles.imageContainer]}>
              <TouchableOpacity style={[styles.categoryPicture]}>
                <Image source={require('../../assets/zn.png')} style={[styles.image]} />
              </TouchableOpacity>
        </View>

        <View style={[styles.imageContainer]}>
              <TouchableOpacity style={[styles.categoryPicture]}>
                <Image source={require('../../assets/zn.png')} style={[styles.image]} />
              </TouchableOpacity>
        </View>

        <View style={[styles.imageContainer]}>
              <TouchableOpacity style={[styles.categoryPicture]}>
                <Image source={require('../../assets/zn.png')} style={[styles.image]} />
              </TouchableOpacity>
        </View>
             
      </ScrollView>
    </View>
  );
};

export default Feeds;