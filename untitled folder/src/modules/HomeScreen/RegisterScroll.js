import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import Icons from '../../utils/Icons';
import InnerStyle from '../HomeScreen/style';
import GlobalStyle from '../Styles';
import GradientText from '../../components/GradientText';
const RegisterScroll = props => {
  return (
    <View>
      <SafeAreaView style={InnerStyle.safeStyle}>
        <Image source={Icons.REGISTER} style={InnerStyle.registerStyle} />
        <Image source={Icons.EARN} style={InnerStyle.earnStyle} />
        <Image source={Icons.CONTACT} style={InnerStyle.earnStyle} />
        <Image source={Icons.PREFERENCES} style={InnerStyle.preferencStyle} />
        <Image source={Icons.FEEDBACK} style={InnerStyle.preferencStyle} />
        <Image source={Icons.GITCOINS} style={InnerStyle.gitCoins} />
        <Image source={Icons.HELP} style={InnerStyle.earnStyle} />
        <Image source={Icons.JOIN} style={InnerStyle.preferencStyle} />
      </SafeAreaView>
      <View style={InnerStyle.text}>
        <Text>Register</Text>
        <Text>Earn</Text>
        <Text>Contacts</Text>
        <Text>Preferences</Text>
        <Text>Feedback</Text>
      </View>
    </View>

  );
};
export default RegisterScroll;
