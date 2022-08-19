import React from 'react';
import {StyleSheet, Text, View,SafeAreaView, Image} from 'react-native';
import Icons from "../../utils/Icons";
import GlobalStyle from '../Styles';
const Input = () => {
  return (
    <View style={{paddingTop:20}}>
      <View style={{marginLeft:15,marginRight:10,flexDirection:'row'}}>
      <Text style={[GlobalStyle.textContainer,{width:'50%'}]}>Location </Text>
      </View>
    <SafeAreaView style={{margin: 10}}>
      <View style={GlobalStyle.cardViewContainer}>
        <Image source={Icons.LOCATION} style={{width: 25, height: 30,marginTop:-5}}/>
        <Text style={{justifyContent: 'center', fontWeight: '700'}}>
          MY Company,Visakhapatnam,530060
        </Text>
        <Image source={Icons.VECTOR} style={{width: 20, height: 20}}/>
      </View>
    </SafeAreaView>
    </View>
  );
};
export default Input;
