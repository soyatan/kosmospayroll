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

export const WeeklyChartSL = ({datam, currency}) => {
  if (datam) {
    console.log(datam);
    const data = {
      labels: datam.labels,
      legend: ['L1', 'L2'],

      data: datam.data || [],
      barColors: ['#F890AB', '#E9E9E9', '#c60e0e'],
    };

    return (
      <>
        <StackedBarChart
          bezier
          segments={7}
          hideLegend={true}
          style={styles.chartstyleweekly}
          data={datam}
          width={screenWidth * 0.95}
          height={styles.dashchart.height}
          chartConfig={chartConfigs[3]}
          formatYLabel={value => Math.round(value)}
          verticalLabelsHeightPercentage={0.65}
          withHorizontalLabels={true}
        />
      </>
    );
  }
  return (
    <View style={{alignItems: 'center'}}>
      <ActivityIndicator size="small" color="white" />
    </View>
  );
};
