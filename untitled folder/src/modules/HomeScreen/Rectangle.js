import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import Icons from '../../utils/Icons';
import InnerStyle from '../HomeScreen/style';
import GlobalStyle from '../Styles';
import GradientText from '../../components/GradientText';
const Rectangle = props => {
  return (
    <View>
      <SafeAreaView style={[InnerStyle.safeStyle, {marginBottom: -10}]}>
        <View style={InnerStyle.rectangle}>
          <Image style={InnerStyle.recImage} source={Icons.RDARK} />
        </View>
        <View style={InnerStyle.rectangle}>
          <Image style={InnerStyle.recImage} source={Icons.RLIGHT} />
        </View>
        <View style={InnerStyle.rectangle}>
          <Image style={InnerStyle.recImage} source={Icons.RLIGHT} />
        </View>
        <View style={InnerStyle.rectangle}>
          <Image style={InnerStyle.recImage} source={Icons.RLIGHT} />
        </View>
        <View style={InnerStyle.rectangle}>
          <Image style={InnerStyle.recImage} source={Icons.RLIGHT} />
        </View>
        <View style={InnerStyle.rectangle}>
          <Image style={InnerStyle.recImage} source={Icons.RLIGHT} />
        </View>
        <View style={InnerStyle.rectangle}>
          <Image style={InnerStyle.recImage} source={Icons.RLIGHT} />
        </View>
        <View style={InnerStyle.rectangle}>
          <Image style={InnerStyle.recImage} source={Icons.RLIGHT} />
        </View>
      </SafeAreaView>
    </View>
  );
};
export default Rectangle;
