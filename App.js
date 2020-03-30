//importing core modules
import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

//importing custom modules
import Swiper from 'react-native-swiper';
import {styles} from './src/styles/styles'

//variable declarations
const { width, height } = Dimensions.get('window');

export default function App() {
  return (
    <View style={styles.mainScreen}>
      <StatusBar barStyle='light-content' />
    </View>
  );
}


