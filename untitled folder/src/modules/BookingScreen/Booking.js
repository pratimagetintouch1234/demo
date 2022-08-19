import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Icons from '../../utils/Icons';
import GradientText from '../../components/GradientText';
import GlobalStyle from '../Styles';
const Booking = () => {
  return (
    <View>
      <View style={{marginLeft: 15, marginRight: 10, flexDirection: 'row'}}>
        <Text style={[GlobalStyle.textContainer, {width: '50%'}]}>
          Category{' '}
        </Text>
      </View>
      <View style={{margin: 10}}>
        <View style={GlobalStyle.cardViewContainer}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={Icons.BOOK}
              style={{marginTop: -11, width: 30, height: 50}}
            />
            <Text style={GlobalStyle.fontContainer}>Bookings</Text>
          </View>
          <View
            style={{flexDirection: 'column', justifyContent: 'space-between'}}>
            <GradientText style={{fontSize: 12, paddingLeft: 12}}>
              More Info
            </GradientText>
            <Text style={{color: 'gray', fontSize: 10}}>Needs completed</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default Booking;
