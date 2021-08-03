import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {TouchableIcon} from '../../Assets/Svgs/touchableIcon';
import {
  getFocusedRouteNameFromRoute,
  useNavigation,
  useNavigationState,
  useRoute,
} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {userSelector} from '../../redux/userReducer';

export const Header = ({route}) => {
  const [title, settitle] = useState('');

  useEffect(() => {
    const titlefromroute = getHeaderTitle(route);
    settitle(titlefromroute);
  }, [route]);
  function getHeaderTitle(route) {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Payroll';

    switch (routeName) {
      case 'Payroll':
        return 'Dashboard';
      case 'Dashboard':
        return 'Dashboard';
      case 'Settings':
        return 'Settings';
      case 'Payslips':
        return 'Pay Slip Summary';
      case 'Attendance':
        return 'Attendance';
      case 'Roster':
        return 'Roster';
    }
  }
  const user = useSelector(userSelector);

  const navigation = useNavigation();
  return (
    <View style={styles.headercontainer}>
      <View style={styles.headertitlebox}>
        <Text style={styles.bigwhitetext}>{title}</Text>
      </View>
    </View>
  );
};
