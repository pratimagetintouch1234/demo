import React from 'react';
import {Button, View, Text} from 'react-native';
import Booking from './Booking';
import Health from './Health';
import Text5 from './Text5';
import Header from './Header';
import Input from './Input';
import HealthScreen from './HealthScreen';
import Icons from '../../utils/Icons';
import LinearGradientButton from '../../components/LinearGradientButton';
import StringOfLanguage from '../../Languages';
import {TouchableOpacity} from 'react-native-gesture-handler';
export default function BookingScreen({navigation}) {
  return (
    <View>
      <Header />
      <Input />
      <Booking />
      <Health
        firstItem="Sub Category"
        firstIcon={Icons.HEALTH}
        firstWord="Health"
        secondItem="Need"
        secondIcon={Icons.HOSPITAL}
        secondWord="Biryani"
      />
      <Health
        customStyle={{fontWeight: '200'}}
        customIconStyle={{width: 28, height: 28}}
        firstItem="Radius"
        firstIcon={Icons.RADIUS}
        firstWord="Any"
        secondItem="TypeOfProvider"
        secondIcon={Icons.ANY}
        secondWord="Any"
      />
      <LinearGradientButton
        buttonText={StringOfLanguage.search}
        handleSubmit={() => {
          navigation.navigate('viewAll');
        }}
      />
      <Text5 />
      <HealthScreen />
    </View>
  );
}
