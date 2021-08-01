import React from 'react';

import {StatusBar} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';

import {Colors} from '../../constants/Colors';
import DashboardScreen from './../../Components/Dashboard/DashboardScreen';
import {Footer} from '../../Components/Footer/Footer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoadingScreen from '../../Components/Loading/LoadingScreen';

const Payroll = createBottomTabNavigator();
const PayrollNavigation = () => {
  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={Colors.mainGray} />
      <Payroll.Navigator tabBar={() => <Footer />}>
        <Payroll.Screen name="Dashboard" component={DashboardScreen} />
        <Payroll.Screen name="Loading" component={LoadingScreen} />
      </Payroll.Navigator>
    </>
  );
};

export default PayrollNavigation;
