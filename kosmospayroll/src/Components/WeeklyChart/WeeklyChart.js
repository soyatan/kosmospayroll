import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import {fetchEmployees, getGlobalDailyAttendance} from '../../API/dbfunctions';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';

import {WeeklyChartSL} from '../Charts/WeeklyChartSL';

const WeeklyChart = ({employees}) => {
  getGlobalDailyAttendance(employees);
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
