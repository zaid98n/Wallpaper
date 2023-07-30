import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TextInput, ScrollView, TouchableOpacity, Alert, Modal } from 'react-native';
import { MaterialIcons } from 'react-native-vector-icons';
import styles from './styles';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './app/navigation/appNavigator';

export default function App() {
    return <NavigationContainer>
        <AppNavigator />
    </NavigationContainer>
}
