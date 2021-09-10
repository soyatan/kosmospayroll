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

export const MonthlyChartSL = ({datam, currency}) => {
  if (datam) {
    return (
      <>
        <StackedBarChart
          bezier
          hideLegend={true}
          style={styles.chartstyle}
          data={datam}
          width={screenWidth * 0.95}
          height={styles.dashchart.height}
          chartConfig={chartConfigs[5]}
          formatYLabel={value => Math.round(value)}
        />
      </>
    );
  } else {
    return (
      <View style={{}}>
        <ActivityIndicator size="small" color="white" />
      </View>
    );
  }
};
