import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import Icons from '../../utils/Icons';
import GlobalStyle from '../Styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import GradientText from '../../components/GradientText';
export default class HealthScreen extends React.Component {
  render() {
    return (
      <View style={{margin: 23}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity onPress={() => this.props.rbSheet.current.close()}>
            <AntDesign name="arrowleft" size={25} color="black" />
          </TouchableOpacity>
          <Text
            style={{
              marginLeft: -80,
              color: 'lightgray',
              fontWeight: '700',
              fontSize: 22,
            }}>
            10 needs
          </Text>
          <View>
            <GradientText style={{fontSize: 20, fontWeight: '700'}}>
              Health
            </GradientText>
          </View>
        </View>
        <View style={GlobalStyle.overalStyle}>
          <GradientText style={GlobalStyle.sheetContainer}>
            Hospitals
          </GradientText>
          <Image
            source={Icons.HOSPITALSYMBOL}
            style={{width: 40, height: 40}}
          />
        </View>
        <View style={{marginTop: 10, borderWidth: 0.4}}></View>
        <View style={GlobalStyle.overalStyle}>
          <GradientText style={GlobalStyle.sheetContainer}>
            Clinics
          </GradientText>
          <Image source={Icons.CLINICS} style={{width: 40, height: 40}} />
        </View>
        <View style={{marginTop: 10, borderWidth: 0.4}}></View>
        <View style={GlobalStyle.overalStyle}>
          <GradientText style={GlobalStyle.sheetContainer}>
            Home Doctors
          </GradientText>
          <Image source={Icons.HOMEDOCTORS} style={{width: 40, height: 40}} />
        </View>
        <View style={{marginTop: 10, borderWidth: 0.4}}></View>
        <View style={GlobalStyle.overalStyle}>
          <GradientText style={GlobalStyle.sheetContainer}>
            Laborataries
          </GradientText>
          <Image source={Icons.LABORATORIES} style={{width: 40, height: 40}} />
        </View>
        <View style={{marginTop: 10, borderWidth: 0.4}}></View>
        <View style={GlobalStyle.overalStyle}>
          <GradientText style={GlobalStyle.sheetContainer}>
            Home Tests
          </GradientText>
          <Image source={Icons.HOMETEST} style={{width: 40, height: 40}} />
        </View>
        <View style={{marginTop: 10, borderWidth: 0.4}}></View>
        <View style={GlobalStyle.overalStyle}>
          <GradientText style={GlobalStyle.sheetContainer}>
            Virtual Doctors
          </GradientText>
          <Image
            source={Icons.VIRTUALDOCTORS}
            style={{width: 40, height: 40}}
          />
        </View>
        <View style={{marginTop: 10, borderWidth: 0.4}}></View>
      </View>
    );
  }
}
