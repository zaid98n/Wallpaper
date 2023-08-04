import React, { Component, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TextInput, ScrollView, TouchableOpacity, Alert, Modal, Dimensions } from 'react-native';
import { MaterialIcons } from 'react-native-vector-icons';
import styles from '../../styles';
import { v4 as uuidv4 } from 'uuid';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from '@react-navigation/stack';
import Nature from './Nature';

// const Feeds = () => {

//   return (
//     <View style={styles.container}>
//       <StatusBar style="auto" />
//       <ScrollView contentContainerStyle={styles.scrollContentContainer}>
//         <View>
//           <Text style={{ fontWeight: 'bold', textAlign: 'center', marginTop: 10, fontSize: 20, color: 'green' }}>Categories</Text>
//         </View>
//         <View style={[styles.imageContainer]}>
//           <TouchableOpacity style={[styles.categoryPicture]}>
//             <Image source={require('../../assets/CatBack.png')} style={[styles.image]} />
//             <Text style={[styles.CategoryName]}>Nature</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// export default Feeds;

const Stack = createStackNavigator();

function Feeds() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="Nature" component={Nature} />
    </Stack.Navigator>
  );
}

function CategoriesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView contentContainerStyle={styles.scrollContentContainer}>
        <View>
          <Text style={{ fontWeight: 'bold', textAlign: 'center', marginTop: 10, fontSize: 20, color: 'green' }}>Categories</Text>
        </View>
        <View style={[styles.imageContainer]}>
          <TouchableOpacity onPress={() => navigation.navigate('Nature')} style={[styles.categoryPicture]}>
            <Image source={require('../../assets/CatBack.png')} style={[styles.image]} />
            <Text style={[styles.CategoryName]}>Nature</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.imageContainer]}>
          <TouchableOpacity style={[styles.categoryPicture]}>
            <Image source={require('../../assets/CatBack.png')} style={[styles.image]} />
            <Text style={[styles.CategoryName]}>Happiness</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.imageContainer]}>
          <TouchableOpacity style={[styles.categoryPicture]}>
            <Image source={require('../../assets/CatBack.png')} style={[styles.image]} />
            <Text style={[styles.CategoryName]}>Girls</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.imageContainer]}>
          <TouchableOpacity style={[styles.categoryPicture]}>
            <Image source={require('../../assets/CatBack.png')} style={[styles.image]} />
            <Text style={[styles.CategoryName]}>abstract</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.imageContainer]}>
          <TouchableOpacity style={[styles.categoryPicture]}>
            <Image source={require('../../assets/CatBack.png')} style={[styles.image]} />
            <Text style={[styles.CategoryName]}>Ship</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.imageContainer]}>
          <TouchableOpacity style={[styles.categoryPicture]}>
            <Image source={require('../../assets/CatBack.png')} style={[styles.image]} />
            <Text style={[styles.CategoryName]}>Sadness</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.imageContainer]}>
          <TouchableOpacity style={[styles.categoryPicture]}>
            <Image source={require('../../assets/CatBack.png')} style={[styles.image]} />
            <Text style={[styles.CategoryName]}>Dance</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

export default Feeds;