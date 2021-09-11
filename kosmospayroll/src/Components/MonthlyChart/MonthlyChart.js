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
  const [paymentData, setpaymentData] = useState(null);

  useEffect(() => {
    const createChartData = obj => {
      let labels = [];
      let legend = ['Earnings'];
      let legendPay = ['Payments'];
      let datasets = [{data: []}];
      let paymentDatasets = [{data: []}];
      let barColors = ['#8cc79c', '#be8cc7'];
      Object.keys(obj).map(date => {
        labels.push(date);
        datasets[0].data.push(obj[date].earnings);
        paymentDatasets[0].data.push(obj[date].payments);
      });
      return {labels, legend, legendPay, datasets, barColors, paymentDatasets};
    };
    if (employees) {
      const monthlyBalances = createGlobalMonthlyBalances(employees);

      const dataObject = createChartData(monthlyBalances);
      const updatedPaymentChartData = {
        labels: dataObject.labels,
        legend: dataObject.legendPay,
        datasets: dataObject.paymentDatasets,
      };
      const updatedChartData = {
        labels: dataObject.labels,
        legend: dataObject.legend,
        datasets: dataObject.datasets,
      };
      setchartData(updatedChartData);
      setpaymentData(updatedPaymentChartData);
    }
  }, [employees]);

  //console.log(paymentData);
  const data = {
    labels: ['Test1', 'Test2'],
    legend: ['L1', 'L2', 'L3'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
      {
        data: [15, 25, 110, 80, 99, 43],
      },
    ],
  };
  return (
    <View style={styles.container}>
      {chartData && paymentData ? (
        <MonthlyChartSL datam={chartData} datapay={paymentData} />
      ) : null}
    </View>
  );
};

export default MonthlyChart;
