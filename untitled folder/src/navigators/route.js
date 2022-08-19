import * as React from 'react';
import {Button, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import viewAllScreen from '../modules/viewAllScreen';
import BookingScreen from '../modules/BookingScreen';
import BottomTab from './bottomTab';
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Booking"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="viewAll" component={viewAllScreen} />
      <Stack.Screen name="Booking" component={BookingScreen} />
      <Stack.Screen name="Bottom" component={BottomTab} />
    </Stack.Navigator>
  );
}

export default MyStack;