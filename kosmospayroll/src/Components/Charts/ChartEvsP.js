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

export const ChartEvsP = ({datam}) => {
  console.log(datam);
  const data = {
    labels: datam.labels,
    //legend: ['L1', 'L2'],

    data: datam.data,
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
