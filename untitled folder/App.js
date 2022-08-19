import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
//import BookingScreen from './src/modules/BookingScreen';
//import MyStack from './src/navigators/route';
import MyDrawer from './src/navigators/drawer';
import BottomTab from './src/navigators/bottomTab';
import MyStack from './src/navigators/route';

export default function StackButton() {
  return (
    <NavigationContainer>
      {/* <MyStack /> */}
      <BottomTab />
      {/* <MyDrawer /> */}
    </NavigationContainer>
  );
}
