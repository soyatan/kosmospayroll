import React, {useEffect, useState} from 'react';
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
  const [chartData, setchartData] = useState(null);
  useEffect(() => {
    if (datam.data && datam.legend) {
      let newData = [{data: []}];
      if (data.data.length > 0) {
        datam.data.map(arr => {
          let totalPay = 0;
          arr.map(pay => {
            totalPay += pay;
          });
          newData[0].data.push(totalPay);
        });
      }
      setchartData({datasets: newData, labels: datam.labels});
    }
    console.log(datam);
  }, [datam]);
  const data = {
    labels: datam.labels,
    data: datam.data || [],
    barColors: ['#F890AB', '#E9E9E9'],
  };
  if (chartData) {
    return (
      <>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.chartheadertext}>Monthly Earnings</Text>
          <BarChart
            bezier
            hideLegend={true}
            style={styles.chartstyle}
            data={chartData}
            width={screenWidth * 0.9}
            height={styles.chart.height}
            chartConfig={chartConfigs[4]}
            horizontalLabelRotation={-30}
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
