import React from 'react';

import {StatusBar} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';

import {Colors} from '../../constants/Colors';
import DashboardScreen from '../../Components/Dashboard/DashboardScreen';
import {Footer} from '../../Components/Footer/Footer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoadingScreen from '../../Components/Loading/LoadingScreen';
import RosterScreen from '../../Components/Roster/RosterScreen';
import AttendanceScreen from '../../Components/Attendance/AttendanceScreen';
import PayslipsScreen from '../../Components/Payslips/PayslipsScreen';
import SettingsScreen from '../../Components/Settings/SettingsScreen';
import AddEmployeeScreen from '../../Components/AddEmplyee/AddEmployeeScreen';

const Settings = createStackNavigator();
const SettingsNavigation = () => {
  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={Colors.mainGray} />
      <Settings.Navigator>
        <Settings.Screen name="Settings" component={SettingsScreen} />
      </Settings.Navigator>
    </>
  );
};

export default SettingsNavigation;
