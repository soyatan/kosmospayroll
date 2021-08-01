import React, {useRef} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {TouchableIcon} from './../../Assets/Svgs/touchableIcon';
import {
  useNavigation,
  useNavigationState,
  useRoute,
} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {userSelector} from '../../redux/userReducer';

export const Footer = () => {
  const user = useSelector(userSelector);

  const navigation = useNavigation();
  return (
    <View style={styles.footercontainer}>
      <View style={styles.footeritem}>
        <TouchableIcon
          name={'hide'}
          scale={1.2}
          onPress={() => navigation.navigate('Loading')}
        />
        <Text style={styles.smalltext}>Dashboard</Text>
      </View>
      <View style={styles.footeritem}>
        <TouchableIcon
          name={'dashboard'}
          scale={1.2}
          onPress={() => navigation.navigate('Dashboard')}
        />
        <Text style={styles.smalltext}>Dashboard</Text>
      </View>
    </View>
  );
};
