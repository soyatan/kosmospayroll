import React from 'react';
import {StatusBar, BackHandler} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import {userSelector} from '../../redux/userReducer';
import AuthNavigation from '../Auth/AuthNavigation';
import PayrollNavigation from '../Payroll/PayrollNavigation';

import {Footer} from '../../Components/Footer/Footer';
import {Header} from './../../Components/Header/Header';
import styles from '../../Components/Header/styles';

const Main = createStackNavigator();

export const MainNavigation = () => {
  const user = useSelector(userSelector);
  return (
    <NavigationContainer>
      <Main.Navigator>
        {!user.isLoggedIn ? (
          <Main.Screen
            name="Auth"
            component={AuthNavigation}
            options={{headerShown: false}}
          />
        ) : (
          <Main.Screen
            name="Payroll"
            component={PayrollNavigation}
            options={({route}) => ({
              header: () => <Header route={route} />,
            })}
          />
        )}
      </Main.Navigator>
    </NavigationContainer>
  );
};
