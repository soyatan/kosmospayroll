import React, {useState, useEffect} from 'react';
import {View, Text, ActivityIndicator, TouchableOpacity} from 'react-native';
import styles from './styles';

import {
  getFocusedRouteNameFromRoute,
  useNavigation,
} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {userSelector} from '../../redux/userReducer';
import {Icon} from './../../Assets/Svgs/icon';
import {employeeNameSelector} from './../../redux/employeeNameReducer';

export const Header = ({route}) => {
  const [title, settitle] = useState('');
  const currentEmployee = useSelector(employeeNameSelector);
  const [isEmp, setisEmp] = useState(false);
  const employeeheader = () => {
    return (
      <>
        <View style={styles.employeeheader}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.iconcontainer}>
            <Icon name={'left'} scale={1.3} color={'white'} />
          </TouchableOpacity>
          {currentEmployee ? (
            <>
              <View style={styles.headertextcontainer}>
                <Text style={styles.headersmalltext}>
                  {currentEmployee.name}
                </Text>
                <Text style={styles.headersmallertext}>
                  {currentEmployee.designation}
                </Text>
              </View>
            </>
          ) : (
            <ActivityIndicator size="small" color="white" />
          )}
          <TouchableOpacity style={styles.iconcontainer}>
            <Icon name={'edit'} scale={1.3} color={'white'} />
          </TouchableOpacity>
        </View>
      </>
    );
  };

  useEffect(() => {
    const titlefromroute = getHeaderTitle(route);
    settitle(titlefromroute);
  }, [route, currentEmployee]);

  const headerwithtitle = title => {
    return <Text style={styles.bigwhitetext}>{title}</Text>;
  };

  function getHeaderTitle(route) {
    setisEmp(false);
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
      case 'Employee':
      case 'Payment':
        return setisEmp(true);
      case 'Add':
        return 'Add Employee';
    }
  }
  const user = useSelector(userSelector);

  const navigation = useNavigation();
  return (
    <View style={styles.headercontainer}>
      {!isEmp ? (
        <View style={styles.headertitlebox}>{headerwithtitle(title)}</View>
      ) : (
        employeeheader()
      )}
    </View>
  );
};
