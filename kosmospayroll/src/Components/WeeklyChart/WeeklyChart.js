import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import {fetchEmployees} from '../../API/dbfunctions';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {userSelector} from '../../redux/userReducer';
import {loadingSelector, setLoading} from '../../redux/loadingReducer';
import {employeesSelector} from '../../redux/employeesReducer';
import DashRectangle from '../DashRectangle/DashRectangle';
import {EmployeeChart} from '../Charts/EmployeeChart';

const WeeklyChart = () => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <View style={styles.dashinfocontainer}>
          <DashRectangle />
          <Text>26 Total Employees</Text>
        </View>
        <View style={styles.dashinfocontainer}>
          <DashRectangle />
          <Text>26 Total Employees</Text>
        </View>
        <View style={styles.dashinfocontainer}>
          <DashRectangle />
          <Text>26 Total Employees</Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <EmployeeChart />
      </View>
    </View>
  );
};

export default WeeklyChart;
