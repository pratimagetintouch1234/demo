import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icons from '../../utils/Icons';
import GlobalStyle from '../Styles';
import InnerStyle from '../HomeScreen/style';
import GradientText from '../../components/GradientText';
const Bookings = props => {
  return (
    <SafeAreaView style={{margin: 5, marginLeft: 10, marginRight: 10}}>
      <View style={InnerStyle.c}>
        <TouchableOpacity onPress={() => alert('post')}>
          <GradientText
            firstColor={props.firstColor}
            secondColor={props.secondColor}
            style={InnerStyle.hScreenText}>
            {props.firstItem}
          </GradientText>
          <Text style={InnerStyle.textContainer}>{props.firstWord}</Text>
          <View style={props.customStyle}>
            <Image source={props.firstIcon} style={props.customIconStyle} />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default Bookings;
