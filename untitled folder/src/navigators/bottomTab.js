import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionic from 'react-native-vector-icons/Ionicons';
import BookingScreen from '../modules/BookingScreen';
import viewAllScreen from '../modules/viewAllScreen';

const Tab = createBottomTabNavigator();
function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let Iconname;
          if (route.name === 'Booking') {
            Iconname = focused ? 'ios-home' : 'ios-home-outline';
          } else if (route.name === 'viewAll') {
            Iconname = focused ? 'ios-calendar' : 'ios-calendar-outline';
          }
          return <Ionic name={Iconname} size={size} colour={color} />;
        },
        headerShown: false,
      })}>
      <Tab.Screen name="Booking" component={BookingScreen} />
      <Tab.Screen name="viewAll" component={viewAllScreen} />
    </Tab.Navigator>
  );
}
export default BottomTab;
