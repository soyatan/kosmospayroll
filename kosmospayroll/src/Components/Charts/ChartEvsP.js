import React from 'react';
import {View, ActivityIndicator, Text} from 'react-native';
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
    data: datam.data || [],
    barColors: ['#F890AB', '#E9E9E9'],
  };
  if (datam) {
    return (
      <>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.chartheadertext}>Monthly Earnings</Text>
          <StackedBarChart
            bezier
            hideLegend={true}
            style={styles.chartstyle}
            data={data}
            width={screenWidth * 0.9}
            height={styles.chart.height}
            chartConfig={chartConfigs[4]}
            formatYLabel={value => formatCurrency(Math.round(value), currency)}
          />
        </View>
      </>
    );
  }
  return (
    <View style={{}}>
      <ActivityIndicator size="small" color="white" />
    </View>
  );
};
