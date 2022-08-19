import React, {useRef} from 'react';
import {Button, Text, View, TouchableOpacity, Alert} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import BottomScreen from './BottomScreen';
import GlobalStyle from '../Styles';
export default function Text5() {
  const refRBSheet = useRef();
  return (
    <View style={{justifyContent: 'space-between', backgroundColor: 'white'}}>
      <Text
        style={{
          color: 'black',
          fontSize: 16,
          fontWeight: '700',
          width: '57%',
          paddingLeft: 20,
        }}>
        Latest Previous Searches
      </Text>
      <View>
        <TouchableOpacity
          style={GlobalStyle.customBtnBG}
          onPress={() => refRBSheet.current.open()}>
          <Text style={GlobalStyle.customBtnText}>View all</Text>
        </TouchableOpacity>
        <RBSheet
          ref={refRBSheet}
          height={600}
          width={200}
          closeOnDragDown={true}
          closeOnPressMask={true}
          customStyles={{
            wrapper: {
              padding: 10,
              backgroundColor: '#00000012',
              width: '100%',
            },
            draggableIcon: {
              backgroundColor: '#000',
            },
            container: {
              borderRadius: 10,
            },
          }}>
          <BottomScreen rbSheet={refRBSheet} />
        </RBSheet>
      </View>
    </View>
  );
}
