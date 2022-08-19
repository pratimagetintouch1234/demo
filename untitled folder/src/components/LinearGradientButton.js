import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import IneerStyle from './Style';
import propTypes from 'prop-types';
export default class LinearGradientButton extends React.Component {
  render() {
    const {
      buttonText,
      touchableOpacityCustomStyles,
      linearGradientCustomStyles,
      textStyles,
      handleSubmit,
    } = this.props;

    return (
      <TouchableOpacity
        onPress={handleSubmit}
        style={[IneerStyle.stylingContainer, {touchableOpacityCustomStyles}]}>
        <LinearGradient
          style={[
            {width: 368, height: 45, borderRadius: 10},
            {linearGradientCustomStyles},
          ]}
          colors={['#1A1955', '#43C5AB']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
          <Text style={[IneerStyle.lgContainer, {textStyles}]}>
            {buttonText}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  }
}
LinearGradientButton.propTypes = {
  buttonText: propTypes.string.isRequired,
  linearGradientCustomStyles: propTypes.object,
  touchableOpacityCustomStyles: propTypes.object,
  textStyles: propTypes.object,
  handleSubmit: propTypes.func,
};
