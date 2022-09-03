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
import InnerStyle from '../BookingScreen/Styles';
const Home = () => {
  return (
    <View style={{paddingTop: 5}}>
      <SafeAreaView style={{margin: 15}}>
        <View style={GlobalStyle.cardViewContainer}>
          <Image source={Icons.SEARCH} style={InnerStyle.inputStyle} />
          <TouchableOpacity onPress={() => alert('search')}>
            <Text style={InnerStyle.home}>
              Search for any need here eg;carpenter
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};
export default Home;
