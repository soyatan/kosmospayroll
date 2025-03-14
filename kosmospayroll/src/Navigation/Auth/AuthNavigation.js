import React from 'react';

import {StatusBar} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';

import {Colors} from '../../constants/Colors';

import SignInScreen from '../../Components/Signin/SigninScreen';
import WelcomeScreen from './../../Components/Welcome/WelcomeScreen';

const Auth = createStackNavigator();
const AuthNavigation = () => {
  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={Colors.mainGray} />
      <Auth.Navigator screenOptions={{headerShown: false}}>
        <Auth.Screen name="Welcome" component={WelcomeScreen} />
        <Auth.Screen name="Signin" component={SignInScreen} />
      </Auth.Navigator>
    </>
  );
};

export default AuthNavigation;
