import React from 'react';
import {Button, Text, View, Image, TouchableOpacity, Alert} from 'react-native';
import GlobalStyle from '../Styles';
import Icons from '../../utils/Icons';
import InnerStyle from '../HomeScreen/style';
const Explore = props => {
  return (
    <View style={[InnerStyle.textView,{marginTop:-60}]}>
      <Text style={InnerStyle.textStyle}>Explore</Text>
      <View>
        <TouchableOpacity
          style={InnerStyle.customBtnBG}
          onPress={() => Alert.alert('explore')}>
          <Image source={props.firstIcon} style={props.customIconStyle} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Explore;
