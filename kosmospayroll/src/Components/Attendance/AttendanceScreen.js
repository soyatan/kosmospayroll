import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import AttendanceItem from '../AttendanceItem/AttendanceItem';
import DateContainer from '../DateContainer/DateContainer';
import styles from './styles';
import {employeesSelector} from './../../redux/employeesReducer';
const AttendanceScreen = ({navigation}) => {
  const employees = useSelector(employeesSelector);
  return (
    <View style={styles.container}>
      <DateContainer />
      <View style={styles.attendancecontainer}>
        <FlatList
          data={employees}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => {
            return <AttendanceItem employee={item} />;
          }}
        />
      </View>
    </View>
  );
};

export default AttendanceScreen;
