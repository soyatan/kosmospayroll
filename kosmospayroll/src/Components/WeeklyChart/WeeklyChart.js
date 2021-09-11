import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import {
  fetchEmployees,
  getDayName,
  getGlobalDailyAttendance,
} from '../../API/dbfunctions';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';

import {WeeklyChartSL} from '../Charts/WeeklyChartSL';

const WeeklyChart = ({employees}) => {
  const [chartData, setchartData] = useState(null);

  const data = {
    labels: ['Test1', 'Test2'],
    legend: ['L1', 'L2', 'L3'],
    data: [
      [60, 60, 60],
      [30, 30, 60],
    ],
    barColors: ['#dfe4ea', '#ced6e0', '#a4b0be'],
  };

  useEffect(() => {
    const createChartData = obj => {
      let labels = [];
      let legend = ['Absent', 'Half', 'Present'];
      let data = [];
      let barColors = ['#8cc79c', '#be8cc7', '#71717F'];
      Object.keys(obj).map(date => {
        labels.push(getDayName(date));
        if (
          (obj[date].present === 0) &
          (obj[date].half === 0) &
          (obj[date].absent === 0)
        ) {
          setchartData(null);
        } else {
          data.push([obj[date].present, obj[date].half, obj[date].absent]);
        }
      });
      return {labels, legend, data, barColors};
    };

    if (employees) {
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

  return (
    <View style={styles.container}>
      {chartData ? <WeeklyChartSL datam={chartData} /> : null}
    </View>
  );
};

export default WeeklyChart;
