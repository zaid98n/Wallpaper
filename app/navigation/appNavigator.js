import React, { Component } from 'react';
import { View, Text, StyleSheet, statusbar } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from '../components/Home';
import Feeds from '../components/Feeds';
import Search from '../components/Search';
import Chat from '../components/Chat';
import { StatusBar } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../styles'

const Tab = createMaterialTopTabNavigator();

const AppNavigator = () => {
    return (
        <Tab.Navigator style={{ paddingTop: StatusBar.currentHeight }}
          screenOptions={{
            "tabBarStyle": {
              "backgroundColor": "#181a20"
            },
            tabBarIndicatorStyle: {
              backgroundColor: 'white', // Set the color of the tab indicator to white
            },
          }}
        >
          <Tab.Screen
            options={{
              title: ({ focused }) => (
                <FontAwesome name="home" size={24} color={focused ? 'white' : 'white'} />
              ),
            }}
            component={Home}
            name="Home"
          />
          <Tab.Screen
            options={{
              title: ({ focused }) => (
                <FontAwesome name="bars" size={24} color={focused ? 'white' : 'white'} />
              ),
            }}
            component={Feeds}
            name="Feeds"
          />
        </Tab.Navigator>
    );
  };
  
  export default AppNavigator;