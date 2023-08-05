import React, { Component, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TextInput, ScrollView, TouchableOpacity, Alert, Modal, Dimensions } from 'react-native';
import { MaterialIcons } from 'react-native-vector-icons';
import styles from '../../styles';
import { v4 as uuidv4 } from 'uuid';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from '@react-navigation/stack';
import Nature from './Nature';
import Happiness from './Happiness';
import Girls from './Girls';
import Abstract from './Abstract';
import Ship from './Ship';
import Sadness from './Sadness';
import Dance from './Dance';
import Sexy from './Sexy';

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
    <Stack.Navigator screenOptions={{
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: '#323740', // Set the background color to black
      },
      headerTintColor: 'white', // Set the text color to white
    }}>
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="Nature" component={Nature} />
      <Stack.Screen name="Girls" component={Girls} />
      <Stack.Screen name="Abstract" component={Abstract} />
      <Stack.Screen name="Sexy" component={Sexy} />
      <Stack.Screen name="Happiness" component={Happiness} />
      <Stack.Screen name="Ship" component={Ship} />
      <Stack.Screen name="Sadness" component={Sadness} />
      <Stack.Screen name="Dance" component={Dance} />
    </Stack.Navigator>
  );
}

function CategoriesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView contentContainerStyle={styles.scrollContentContainer}>
        {/* <View>
          <Text style={{ fontWeight: 'bold', textAlign: 'center', marginTop: 10, fontSize: 20, color: 'green' }}>Categories</Text>
        </View> */}
        <View style={[styles.imageContainer]}>
          <TouchableOpacity onPress={() => navigation.navigate('Nature')} style={[styles.categoryPicture]}>
            <Image source={require('../../assets/CatBack.png')} style={[styles.image]} />
            <Text style={[styles.CategoryName]}>Nature</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.imageContainer]}>
          <TouchableOpacity onPress={() => navigation.navigate('Girls')} style={[styles.categoryPicture]}>
            <Image source={require('../../assets/CatBack.png')} style={[styles.image]} />
            <Text style={[styles.CategoryName]}>Girls</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.imageContainer]}>
          <TouchableOpacity onPress={() => navigation.navigate('Abstract')} style={[styles.categoryPicture]}>
            <Image source={require('../../assets/CatBack.png')} style={[styles.image]} />
            <Text style={[styles.CategoryName]}>Abstract</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.imageContainer]}>
          <TouchableOpacity onPress={() => navigation.navigate('Sexy')} style={[styles.categoryPicture]}>
            <Image source={require('../../assets/CatBack.png')} style={[styles.image]} />
            <Text style={[styles.CategoryName]}>Sexy</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.imageContainer]}>
          <TouchableOpacity onPress={() => navigation.navigate('Happiness')} style={[styles.categoryPicture]}>
            <Image source={require('../../assets/CatBack.png')} style={[styles.image]} />
            <Text style={[styles.CategoryName]}>Happiness</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.imageContainer]}>
          <TouchableOpacity onPress={() => navigation.navigate('Ship')} style={[styles.categoryPicture]}>
            <Image source={require('../../assets/CatBack.png')} style={[styles.image]} />
            <Text style={[styles.CategoryName]}>Ship</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.imageContainer]}>
          <TouchableOpacity onPress={() => navigation.navigate('Sadness')} style={[styles.categoryPicture]}>
            <Image source={require('../../assets/CatBack.png')} style={[styles.image]} />
            <Text style={[styles.CategoryName]}>Sadness</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.imageContainer]}>
          <TouchableOpacity onPress={() => navigation.navigate('Dance')} style={[styles.categoryPicture]}>
            <Image source={require('../../assets/CatBack.png')} style={[styles.image]} />
            <Text style={[styles.CategoryName]}>Dance</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

export default Feeds;