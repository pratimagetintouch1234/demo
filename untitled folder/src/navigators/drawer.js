import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import BookingScreen from '../modules/BookingScreen';
import viewAllScreen from '../modules/viewAllScreen';

const Drawer = createDrawerNavigator();
function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Booking">
      <Drawer.Screen name="Booking" component={BookingScreen} />
      <Drawer.Screen name="viewAll" component={viewAllScreen} />
    </Drawer.Navigator>
  );
}
export default MyDrawer;
