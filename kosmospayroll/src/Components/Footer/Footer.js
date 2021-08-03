import React, {useRef, useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {TouchableIcon} from './../../Assets/Svgs/touchableIcon';
import {
  useNavigation,
  useNavigationState,
  useRoute,
} from '@react-navigation/native';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {userSelector} from '../../redux/userReducer';
import {Icon} from '../../Assets/Svgs/icon';
export const Footer = () => {
  const [isFocus, setisFocus] = useState(0);
  const user = useSelector(userSelector);
  const route = useRoute();
  const navigation = useNavigation();
  function getHeaderTitle(route) {
    const routeIndex = getFocusedRouteNameFromRoute(route) ?? 'Payroll';

    switch (routeIndex) {
      case 'Payroll':
        return 0;
      case 'Dashboard':
        return 0;
      case 'Settings':
        return 4;
      case 'Payslips':
        return 3;
      case 'Attendance':
        return 2;
      case 'Roster':
        return 1;
      case 'Add':
        return 1;
    }
  }
  useEffect(() => {
    const titlefromroute = getHeaderTitle(route);
    setisFocus(titlefromroute);
  }, [route]);

  return (
    <View style={styles.footercontainer}>
      <TouchableOpacity
        style={styles.footeritem}
        onPress={() => navigation.navigate('Dashboard')}>
        <Icon
          name={'dashboard'}
          scale={1.7}
          color={isFocus !== 0 ? 'white' : null}
        />
        <Text
          style={[
            styles.smalltext,
            {color: isFocus !== 0 ? 'white' : 'black'},
          ]}>
          Dashboard
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.footeritem}
        onPress={() => navigation.navigate('Roster')}>
        <Icon
          name={'management'}
          scale={1.7}
          color={isFocus !== 1 ? 'white' : null}
        />
        <Text
          style={[
            styles.smalltext,
            {color: isFocus !== 1 ? 'white' : 'black'},
          ]}>
          Roster
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.footeritem}
        onPress={() => navigation.navigate('Attendance')}>
        <Icon
          name={'attendance'}
          scale={1.7}
          color={isFocus !== 2 ? 'white' : null}
        />
        <Text
          style={[
            styles.smalltext,
            {color: isFocus !== 2 ? 'white' : 'black'},
          ]}>
          Attendance
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.footeritem}
        onPress={() => navigation.navigate('Payslips')}>
        <Icon
          name={'salary'}
          scale={1.7}
          color={isFocus !== 3 ? 'white' : null}
        />
        <Text
          style={[
            styles.smalltext,
            {color: isFocus !== 3 ? 'white' : 'black'},
          ]}>
          Payslips
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.footeritem}
        onPress={() => navigation.navigate('Settings')}>
        <Icon
          name={'settings'}
          scale={1.7}
          color={isFocus !== 4 ? 'white' : null}
        />
        <Text
          style={[
            styles.smalltext,
            {color: isFocus !== 4 ? 'white' : 'black'},
          ]}>
          Settings
        </Text>
      </TouchableOpacity>
    </View>
  );
};
