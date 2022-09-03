import React, {useRef} from 'react';

import {
  SafeAreaView,
  View,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import style from './style';
import Icons from '../../utils/Icons';
const Header = () => {
  const props = useRef();
  return (
    <LinearGradient
      colors={['#ffffff', '#ffffff']}
      start={{x: 0, y: 0}}
      style={style.header}>
      <View>
        <TouchableOpacity onPress={() => alert('chage the ProviderMode')}>
          <Image style={style.gitimage} source={Icons.GITTEXT} />
        </TouchableOpacity>
      </View>
      <View style={style.notificationview}>
        <TouchableOpacity onPress={() => alert('Notification')}>
          <Image style={style.notification} source={Icons.NOTIFICATION} />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default Header;
