import React, {useEffect} from 'react';

import {Text, View, StatusBar} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';

import {Colors} from './../../constants/Colors';

import SignInScreen from '../Signin/SigninScreen';

const Auth = createStackNavigator();

const AuthNavigation = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.mainWhite} />
      <Auth.Navigator screenOptions={{headerShown: false}}>
        <Auth.Screen name="Signin" component={SignInScreen} />
      </Auth.Navigator>
    </>
  );
};

export default AuthNavigation;
