import React from 'react';
import {View, ActivityIndicator, Text} from 'react-native';
import {Dimensions} from 'react-native';
import styles from './styles';

import {PieChart} from 'react-native-chart-kit';
import {chartConfigs} from '../../API/chartconfigs';
import {formatCurrency} from '../../API/Helper';
import {useEffect, useState} from 'react';
const screenWidth = Dimensions.get('window').width;

export const BalanceChart = ({data, currency}) => {
  const [pieData, setpieData] = useState([]);
  useEffect(() => {
    if (data && data.length > 0) {
      setpieData(data);
    }
  }, [data]);

  if (pieData) {
    return (
      <>
        <PieChart
          hasLegend={false}
          absolute={false}
          data={pieData}
          height={125}
          width={250}
          style={{
            alignItems: 'center',
            flex: 1,
          }}
          chartConfig={chartConfigs[1]}
          accessor="amount"
        />
      </>
    );
  } else {
    return null;
  }
};

/*return (
    <View style={{}}>
      <ActivityIndicator size="small" color="white" />
    </View>
  );*/
