import React from 'react';
import {View, ActivityIndicator, Text} from 'react-native';
import {Dimensions} from 'react-native';
import styles from './styles';

import {PieChart} from 'react-native-chart-kit';
import {chartConfigs} from '../../API/chartconfigs';
import {formatCurrency} from '../../API/Helper';
const screenWidth = Dimensions.get('window').width;

export const EmployeeChart = ({datak, currency}) => {
  const pieChartData = [
    {
      name: 'Seoul',
      population: 26,
      color: 'rgba(131, 167, 234, 1)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 10,
    },
    {
      name: 'Toronto',
      population: 14,
      color: '#F00',
      legendFontColor: '#7F7F7F',
      legendFontSize: 10,
    },
  ];

  return (
    <>
      <PieChart
        hasLegend={true}
        data={pieChartData}
        height={80}
        width={210}
        chartConfig={chartConfigs[1]}
        accessor="population"
        style={{
          alignItems: 'center',
        }}
      />
    </>
  );
};

/*return (
    <View style={{}}>
      <ActivityIndicator size="small" color="white" />
    </View>
  );*/
