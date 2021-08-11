import React from 'react';
import {View} from 'react-native';
import {Dimensions} from 'react-native';
import styles from './styles';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import {chartConfigs} from '../../API/chartconfigs';
const screenWidth = Dimensions.get('window').width;

export const ChartEvsP = () => {
  const data = {
    labels: ['Test1', 'Test2'],
    legend: ['L1', 'L2', 'L3'],

    data: [
      [60, 60],
      [30, 30],
    ],
    barColors: ['#dfe4ea', '#ced6e0'],
  };
  return (
    <StackedBarChart
      hideLegend={true}
      style={styles.chartstyle}
      data={data}
      width={screenWidth * 0.9}
      height={styles.chart.height}
      chartConfig={chartConfigs[4]}
    />
  );
};
