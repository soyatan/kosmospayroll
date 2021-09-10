import React, {useEffect, useState} from 'react';

import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import styles from './styles';
import DashRectangle from '../DashRectangle/DashRectangle';
import {EmployeeChart} from '../Charts/EmployeeChart';
import {MonthlyChartSL} from './../Charts/MonthlyChartSL';
import {
  createGlobalMonthlyBalances,
  getDayName,
  getGlobalDailyAttendance,
} from '../../API/dbfunctions';

const MonthlyChart = ({employees}) => {
  const [chartData, setchartData] = useState(null);

  useEffect(() => {
    const createChartData = obj => {
      let labels = [];
      let legend = ['Absent', 'Half', 'Present'];
      let data = [];
      let barColors = ['#8cc79c', '#be8cc7', '#71717F'];
      Object.keys(obj).map(date => {
        labels.push(getDayName(date));
        data.push([obj[date].present, obj[date].half, obj[date].absent]);
      });
      return {labels, legend, data, barColors};
    };
    if (employees) {
      const months = createGlobalMonthlyBalances(employees);
      console.log(months);
      const weeklyData = getGlobalDailyAttendance(employees);
      const dataObject = createChartData(weeklyData);

      const updatedChartData = {
        labels: dataObject.labels,
        legend: dataObject.legend,
        data: dataObject.data,
        barColors: dataObject.barColors,
      };
      setchartData(updatedChartData);
    }
  }, [employees]);

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
