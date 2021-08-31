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
import {WeeklyChartSL} from '../Charts/WeeklyChartSL';

const WeeklyChart = () => {
  const data = {
    labels: ['Test1', 'Test2'],
    legend: ['L1', 'L2', 'L3'],
    data: [
      [60, 60, 60],
      [30, 30, 60],
    ],
    barColors: ['#dfe4ea', '#ced6e0', '#a4b0be'],
  };
  return (
    <View style={styles.container}>
      <WeeklyChartSL datam={data} />
    </View>
  );
};

export default WeeklyChart;
