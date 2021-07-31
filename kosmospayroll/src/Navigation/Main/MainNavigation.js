import React from 'react';
import {StatusBar, BackHandler} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import {userSelector} from '../../redux/userReducer';
import AuthNavigation from '../Auth/AuthNavigation';

const Main = createStackNavigator();

export const MainNavigation = () => {
  const user = useSelector(userSelector);
  console.log('1.show user cred.', user);
  return (
    <NavigationContainer>
      <Main.Navigator>
        <Main.Screen
          name="Auth"
          component={AuthNavigation}
          options={{headerShown: false}}
        />
      </Main.Navigator>
    </NavigationContainer>
  );
};
