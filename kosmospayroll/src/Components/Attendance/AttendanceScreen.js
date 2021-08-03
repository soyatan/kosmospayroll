import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AttendanceItem from '../AttendanceItem/AttendanceItem';
import DateContainer from '../DateContainer/DateContainer';
import styles from './styles';

const AttendanceScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <DateContainer />
      <View style={styles.attendancecontainer}>
        <AttendanceItem />
      </View>
    </View>
  );
};

export default AttendanceScreen;
