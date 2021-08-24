import React from 'react';
import {View, ActivityIndicator} from 'react-native';
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
import {formatCurrency} from '../../API/Helper';
const screenWidth = Dimensions.get('window').width;

export const ChartEvsP = ({datam, currency}) => {
  const data = {
    labels: datam.labels,
    //legend: ['L1', 'L2'],

    data: datam.data || [],
    barColors: ['#9523bb', '#548b88'],
  };
  if (datam) {
    return (
      <StackedBarChart
        bezier
        hideLegend={true}
        style={styles.chartstyle}
        data={data}
        width={screenWidth * 0.9}
        height={styles.chart.height}
        chartConfig={chartConfigs[4]}
        formatYLabel={value => `${value}123`}
      />
    );
  }
  return (
    <View style={{}}>
      <ActivityIndicator size="small" color="white" />
    </View>
  );
};
