import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import Icons from '../../utils/Icons';
import GlobalStyle from '../Styles';
const Health = props => {
  return (
    <View>
      <View style={{marginLeft: 15, marginRight: 10, flexDirection: 'row'}}>
        <Text style={[GlobalStyle.textContainer, {width: '57%'}]}>
          {props.firstItem}
        </Text>
        <Text style={[GlobalStyle.textContainer, {width: '43%'}]}>
          {props.secondItem}
        </Text>
      </View>
      <SafeAreaView
        style={{
          justifyContent: 'space-between',
          margin: 10,
          flexDirection: 'row',
        }}>
        <View
          style={[
            GlobalStyle.cardViewContainer,
            {justifyContent: 'flex-start', width: '43%'},
          ]}>
          <Image source={props.firstIcon} style={{width: 35, height: 30}} />
          <Text style={[GlobalStyle.fontContainer, props.customStyle]}>
            {props.firstWord}
          </Text>
        </View>
        <View
          style={[
            GlobalStyle.cardViewContainer,
            {justifyContent: 'flex-start', width: '43%'},
          ]}>
          <Image
            source={props.secondIcon}
            style={[
              {width: 35, marginTop: -5, height: 38},
              props.customIconStyle,
            ]}
          />
          <Text style={[GlobalStyle.fontContainer, props.customStyle]}>
            {props.secondWord}
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
};
export default Health;
