import React from 'react';
import {View, ActivityIndicator, Text} from 'react-native';
import {Dimensions} from 'react-native';
import styles from './styles';

import {BarChart} from 'react-native-chart-kit';
import {chartConfigs} from '../../API/chartconfigs';

const screenWidth = Dimensions.get('window').width;

export const MonthlyChartSL = ({datam, datapay, currency}) => {
  if (datam) {
    return (
      <>
        <View style={styles.multibarchart}>
          <BarChart
            bezier
            hideLegend={true}
            style={styles.stackchartfirst}
            data={datam}
            width={screenWidth * 0.95}
            height={styles.stackcharts.height}
            chartConfig={chartConfigs[0]}
          />
          <BarChart
            bezier
            hideLegend={true}
            withVerticalLabels={false}
            withHorizontalLabels={false}
            style={styles.stackchart}
            data={datapay}
            width={screenWidth * 0.95}
            height={styles.stackcharts.height}
            chartConfig={chartConfigs[1]}
          />
        </View>
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
