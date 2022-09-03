import React, {useRef} from 'react';

import {
  SafeAreaView,
  View,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import InnerStyle from '../HomeScreen/style';
import GlobalStyle from '../Styles';
import LinearGradient from 'react-native-linear-gradient';
import style from './style';
import Icons from '../../utils/Icons';
const Location = () => {
  const props = useRef();
  return (
    <SafeAreaView style={{margin: 10}}>
      <Image source={Icons.HOMELOCATION} style={InnerStyle.inputStyle} />
      <View style={InnerStyle.locationview}>
        <Text style={InnerStyle.homeStyle}>HOME</Text>
        <Text style={InnerStyle.locText}>- MY Company,Visakhapatnam...</Text>
      </View>
      <View style={InnerStyle.radiusview}>
        <Image source={Icons.PIN} style={{width: '10%', height: 18}} />
      </View>
      <View>
        <Text style={InnerStyle.numberText}>530040</Text>
      </View>
    </SafeAreaView>
  );
};

export default Location;
