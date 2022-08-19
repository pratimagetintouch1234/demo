import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import StringOfLanguage from '/Users/pratima/Documents/react-native/Screen/src/Languages/index.js';
export default class Header extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <LinearGradient
          style={{height: 100}}
          colors={['#1A1955', '#43C5AB']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
          <View style={{margin: 10}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <AntDesign name="arrowleft" size={29} color="white" />
              <Text style={{color: 'white', fontSize: 30, fontWeight: '800'}}>
                {StringOfLanguage.Booking}
              </Text>
              <View></View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
              <Text style={{color: 'white', fontSize: 15}}>102</Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{color: 'white'}}>Search Page</Text>
              <Text style={{backgroundColor: 'white', fontSize: 10}}>
                Searches done
              </Text>
            </View>
          </View>
        </LinearGradient>
      </SafeAreaView>
    );
  }
}
