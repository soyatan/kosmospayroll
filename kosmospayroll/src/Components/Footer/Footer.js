import React, {useRef, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {TouchableIcon} from './../../Assets/Svgs/touchableIcon';
import {
  useNavigation,
  useNavigationState,
  useRoute,
} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {userSelector} from '../../redux/userReducer';
import {Icon} from '../../Assets/Svgs/icon';

export const Footer = () => {
  const [isFocus, setisFocus] = useState({dashboard: false});
  const user = useSelector(userSelector);

  const navigation = useNavigation();
  return (
    <View style={styles.footercontainer}>
      <TouchableOpacity
        style={styles.footeritem}
        onPress={() => navigation.navigate('Dashboard')}>
        <Icon name={'dashboard'} scale={1.7} color={'white'} />
        <Text style={styles.smallwhitetext}>Dashboard</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.footeritem}
        onPress={() => navigation.navigate('Roster')}>
        <Icon name={'management'} scale={1.7} color={'white'} />
        <Text style={styles.smallwhitetext}>Roster</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.footeritem}
        onPress={() => navigation.navigate('Attendance')}>
        <Icon name={'attendance'} scale={1.7} color={'white'} />
        <Text style={styles.smallwhitetext}>Attendance</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.footeritem}
        onPress={() => navigation.navigate('Payslips')}>
        <Icon name={'salary'} scale={1.7} color={'white'} />
        <Text style={styles.smallwhitetext}>Payslips</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.footeritem}
        onPress={() => navigation.navigate('Settings')}>
        <Icon name={'settings'} scale={1.7} color={'white'} />
        <Text style={styles.smallwhitetext}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};
