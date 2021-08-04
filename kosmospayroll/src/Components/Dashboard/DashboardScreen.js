import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {fetchEmployees} from '../../API/dbfunctions';
import styles from './styles';
import {useSelector} from 'react-redux';
import {userSelector} from '../../redux/userReducer';

const DashboardScreen = ({navigation}) => {
  const user = useSelector(userSelector);
  useEffect(() => {
    fetchEmployees(user.userid);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.welcometextcontainer}></View>

      <Text>HELLO FROM THE DASHBOARD</Text>
    </View>
  );
};

export default DashboardScreen;
