import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import Icons from '../../utils/Icons';
import GlobalStyle from '../Styles';
import InnerStyle from '../HomeScreen/style';
const GitImage = () => {
  return (
    <View style={{paddingTop: 10}}>
      <SafeAreaView style={{margin: 15}}>
        <Image source={Icons.GIT} style={InnerStyle.image} />
      </SafeAreaView>
    </View>
  );
};
export default GitImage;
