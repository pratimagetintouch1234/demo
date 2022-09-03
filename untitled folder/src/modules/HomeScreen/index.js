import React from 'react';
import {
  Button,
  View,
  Text,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native';
import Icons from '../../utils/Icons';
import LinearGradientButton from '../../components/LinearGradientButton';
import StringOfLanguage from '../../Languages';
import InnerStyle from '../HomeScreen/style';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Home from './Home';
import GitImage from './GitImage';
import Near from './Near';
import Explore from './Explore';
import Bookings from './Bookings';
import Rectangle from './Rectangle';
import Header from './Header';
import Location from './Location';
import RegisterScroll from './RegisterScroll';
export default function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <Header />
      <Location />

      <KeyboardAvoidingView
        keyboardShouldPersistTaps="handled"
        alwaysBounceVertical={false}
        contentContainerStyle={{flexGrow: 1}}>
        <ScrollView>
          <Home />
          <GitImage />
          <Rectangle />
          <Near firstWord="Nearby" secondWord="Post" thirdWord="Phonebook" />
          <RegisterScroll />
          <Explore
            firstIcon={Icons.BOOK}
            customIconStyle={{width: 28, height: 35}}
          />
          <Bookings
            firstColor="#1A1955"
            secondColor="#43C5AB"
            customStyle={InnerStyle.repair}
            customIconStyle={InnerStyle.hScreenImage}
            firstItem="Bookings"
            firstWord=" Get your own delivery person, eg: Health,Transport"
            firstIcon={Icons.BOOKINGBOX}
          />
          <Bookings
            firstColor="#FF5F6D"
            secondColor="#FFC371"
            customStyle={InnerStyle.repair}
            customIconStyle={InnerStyle.hScreenImage}
            firstItem="Repair & Servicing"
            firstWord=" Get your own delivery person, eg: Home App, Automobiles"
            firstIcon={Icons.SERVICE}
          />
          <Bookings
            firstColor="#2C3E50"
            secondColor="#BDC3C7"
            customStyle={InnerStyle.repair}
            customIconStyle={InnerStyle.hScreenImage}
            firstItem="Delivery"
            firstWord=" Get your own delivery person, eg:  2 wheeler"
            firstIcon={Icons.DELIVER}
          />
          <Bookings
            firstColor="#1B2671"
            secondColor="#C33764"
            customStyle={InnerStyle.repair}
            customIconStyle={InnerStyle.hScreenImage}
            firstItem="Career"
            firstWord=" Get your own delivery person, eg:Jobs,Trainers "
            firstIcon={Icons.CAREER}
          />
          <Bookings
            firstColor="#009245"
            secondColor="#E2D51A"
            customStyle={InnerStyle.repair}
            customIconStyle={InnerStyle.hScreenImage}
            firstItem="Buy / Shop"
            firstWord=" Get your own delivery person, eg:Fashion,Gadgets "
            firstIcon={Icons.BUY}
          />
          <Bookings
            firstColor="#88740A"
            secondColor="#FFDB1C"
            customStyle={InnerStyle.freelance}
            customIconStyle={InnerStyle.free}
            firstItem="Freelancing"
            firstWord=" Get your own delivery person, eg:Software Technology "
            firstIcon={Icons.FREELANCING}
          />
          <Bookings
            firstColor="#2C033A"
            secondColor="#98939D"
            customStyle={InnerStyle.repair}
            customIconStyle={InnerStyle.hScreenImage}
            firstItem="Rentals"
            firstWord=" Get your own delivery person, eg:Properties,Vehicles "
            firstIcon={Icons.RENTALS}
          />
          <Bookings
            firstColor="#DD2476"
            secondColor="#A890FE"
            customStyle={InnerStyle.repair}
            customIconStyle={InnerStyle.hScreenImage}
            firstItem="Startup's"
            firstWord=" Get your own delivery person, eg:Investments "
            firstIcon={Icons.DELIVER}
          />
          <Bookings
            firstColor="#514A9D"
            secondColor="#24C6DC"
            customStyle={InnerStyle.repair}
            customIconStyle={InnerStyle.hScreenImage}
            firstItem="Service"
            firstWord=" Get your own delivery person, eg:Donations "
            firstIcon={Icons.SOCIALSERVICE}
          />
          <Bookings
            firstColor="#000C14"
            secondColor="#F8002F"
            customStyle={InnerStyle.repair}
            customIconStyle={InnerStyle.hScreenImage}
            firstItem="Emergency"
            firstWord=" Get your own delivery person, eg:Medical Emergencies "
            firstIcon={Icons.EMERGENCY}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
