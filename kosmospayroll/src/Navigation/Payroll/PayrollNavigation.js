import React from 'react';

import {StatusBar} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';

import {Colors} from '../../constants/Colors';
import DashboardScreen from './../../Components/Dashboard/DashboardScreen';
import {Footer} from '../../Components/Footer/Footer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoadingScreen from '../../Components/Loading/LoadingScreen';
import RosterScreen from './../../Components/Roster/RosterScreen';
import AttendanceScreen from './../../Components/Attendance/AttendanceScreen';
import PayslipsScreen from './../../Components/Payslips/PayslipsScreen';
import SettingsScreen from './../../Components/Settings/SettingsScreen';
import AddEmployeeScreen from '../../Components/AddEmplyee/AddEmployeeScreen';
import EmployeeScreen from './../../Components/EmployeeScreen/EmployeeScreen';

const Payroll = createBottomTabNavigator();
const PayrollNavigation = () => {
  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={Colors.mainGray} />
      <Payroll.Navigator tabBar={() => <Footer />}>
        <Payroll.Screen name="Dashboard" component={DashboardScreen} />
        <Payroll.Screen name="Roster" component={RosterScreen} />
        <Payroll.Screen name="Attendance" component={AttendanceScreen} />
        <Payroll.Screen name="Payslips" component={PayslipsScreen} />
        <Payroll.Screen name="Settings" component={SettingsScreen} />
        <Payroll.Screen name="Add" component={AddEmployeeScreen} />
        <Payroll.Screen name="Employee" component={EmployeeScreen} />
      </Payroll.Navigator>
    </>
  );
};

export default PayrollNavigation;
