import React, {useEffect, useState} from 'react';

import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import styles from './styles';
import DashRectangle from '../DashRectangle/DashRectangle';
import {EmployeeChart} from '../Charts/EmployeeChart';
import {MonthlyChartSL} from './../Charts/MonthlyChartSL';

const MonthlyChart = () => {
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
      <MonthlyChartSL datam={data} />
    </View>
  );
};

export default MonthlyChart;
