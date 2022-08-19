import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
export default function viewAllScreen({navigation}) {
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Text>viewAllScreen</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
