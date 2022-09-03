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
import InnerStyle from '../HomeScreen/style';
import GlobalStyle from '../Styles';
import GradientText from '../../components/GradientText';
const Near = props => {
  return (
    <View>
      <SafeAreaView style={InnerStyle.safeStyle}>
        <View style={[InnerStyle.cardViewContainer, InnerStyle.hViewStyle]}>
          <TouchableOpacity onPress={() => alert('nearby')}>
            <GradientText firstColor="#8408B5" secondColor="#7B03C2">
              <Text style={GlobalStyle.fontContainer}>{props.firstWord}</Text>
            </GradientText>
          </TouchableOpacity>
        </View>
        <View style={[InnerStyle.cardContainer, InnerStyle.hViewStyle]}>
          <TouchableOpacity onPress={() => alert('post')}>
            <GradientText firstColor="#04CEB2" secondColor="#01D377">
              <Text style={GlobalStyle.fontContainer}>{props.secondWord}</Text>
            </GradientText>
          </TouchableOpacity>
        </View>
        <View style={[InnerStyle.container, InnerStyle.hViewStyle]}>
          <TouchableOpacity onPress={() => alert('phonebook')}>
            <GradientText firstColor="#C61818" secondColor="#FF6700">
              <Text style={GlobalStyle.fontContainer}>{props.thirdWord}</Text>
            </GradientText>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};
export default Near;
