import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const AttendanceScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.welcometextcontainer}></View>

      <Text>HELLO FROM THE ATEENDANS</Text>
    </View>
  );
};

export default AttendanceScreen;
