import React from 'react';
import {View} from 'react-native';
import {Dimensions} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
const screenWidth = Dimensions.get('window').width;

export const ChartEvsP = () => {
  const chartConfigs = [
    {
      backgroundColor: '#000000',
      backgroundGradientFrom: '#1E2923',
      backgroundGradientTo: '#08130D',
      color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
      style: {
        borderRadius: 16,
      },
    },
    {
      backgroundColor: '#022173',
      backgroundGradientFrom: '#022173',
      backgroundGradientTo: '#1b3fa0',
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16,
      },
      propsForBackgroundLines: {
        strokeDasharray: '', // solid background lines with no dashes
      },
    },
    {
      backgroundColor: '#ffffff',
      backgroundGradientFrom: '#ffffff',
      backgroundGradientTo: '#ffffff',
      color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    },
    {
      backgroundColor: '#ffffff',
      backgroundGradientFrom: '#ffffff',
      backgroundGradientTo: '#ffffff',
      color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    },
    {
      backgroundColor: '#26872a',
      backgroundGradientFrom: '#43a047',
      backgroundGradientTo: '#66bb6a',
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16,
      },
    },
    {
      backgroundColor: '#000000',
      backgroundGradientFrom: '#000000',
      backgroundGradientTo: '#000000',
      color: (opacity = 1) => `rgba(${255}, ${255}, ${255}, ${opacity})`,
    },
    {
      backgroundColor: '#0091EA',
      backgroundGradientFrom: '#0091EA',
      backgroundGradientTo: '#0091EA',
      color: (opacity = 1) => `rgba(${255}, ${255}, ${255}, ${opacity})`,
    },
    {
      backgroundColor: '#e26a00',
      backgroundGradientFrom: '#fb8c00',
      backgroundGradientTo: '#ffa726',
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16,
      },
    },
    {
      backgroundColor: '#b90602',
      backgroundGradientFrom: '#e53935',
      backgroundGradientTo: '#ef5350',
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16,
      },
    },
    {
      backgroundColor: '#ff3e03',
      backgroundGradientFrom: '#ff3e03',
      backgroundGradientTo: '#ff3e03',
      color: (opacity = 1) => `rgba(${0}, ${0}, ${0}, ${opacity})`,
    },
  ];

  const data = {
    labels: ['Test1', 'Test2'],
    legend: ['L1', 'L2', 'L3'],
    data: [
      [60, 60, 60],
      [30, 30, 60],
    ],
    barColors: ['#dfe4ea', '#ced6e0', '#a4b0be'],
  };
  return (
    <StackedBarChart
      style={{
        backgroundColor: chartConfigs[0].backgroundColor,
      }}
      data={data}
      width={screenWidth}
      height={220}
      chartConfig={chartConfigs[0]}
    />
  );
};
