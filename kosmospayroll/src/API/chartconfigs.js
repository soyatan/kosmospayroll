import {Colors} from './../constants/Colors';
export const chartConfigs = [
  {
    backgroundColor: `${Colors.mainWhite}`,
    backgroundGradientFrom: `${Colors.mainPurple}`,
    backgroundGradientTo: `${Colors.lightGreen}`,
    backgroundGradientFromOpacity: 0.1,
    backgroundGradientToOpacity: 0.3,
    decimalPlaces: 0,
    barPercentage: 0.5,
    fillShadowGradient: '#60093a',
    fillShadowGradientOpacity: 1,
    labelColor: () => Colors.mainGray,

    color: () => '#1b3fa250',
    style: {
      borderRadius: 5,

      color: '#1b3fa0',
    },
    propsForLabels: {
      fontSize: 11,
      fontWeight: 'bold',
    },
  },
  {
    backgroundColor: `${Colors.mainWhite}`,
    backgroundGradientFrom: `${Colors.mainPurple}`,
    backgroundGradientTo: `${Colors.lightGreen}`,
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    decimalPlaces: 0,
    barPercentage: 0.5,
    labelColor: () => Colors.mainGray,
    fillShadowGradient: '#1a8115',
    fillShadowGradientOpacity: 0.5,
    color: () => '#1a8115',
    style: {
      borderRadius: 5,

      color: '#1b3fa0',
    },
    propsForLabels: {
      fontSize: 5,
      fontWeight: 'bold',
    },
    propsForBackgroundLines: {
      strokeWidth: 0,
    },
  },
  {
    backgroundColor: '#ffffff',
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  },
  {
    backgroundColor: `${Colors.mainWhite}`,
    backgroundGradientFrom: `${Colors.mainPurple}`,
    backgroundGradientTo: `${Colors.lightGreen}`,
    backgroundGradientFromOpacity: 0.1,
    backgroundGradientToOpacity: 0.3,
    decimalPlaces: 0,
    barPercentage: 0.75,
    labelColor: () => Colors.mainGray,

    color: () => '#1b3fa250',
    style: {
      borderRadius: 5,

      color: '#1b3fa0',
    },
    propsForLabels: {
      fontSize: 10,
      fontWeight: 'bold',
    },
  },
  {
    backgroundColor: `${Colors.mainLightGray}`,
    backgroundGradientFrom: `${Colors.mainLightGray}`,
    backgroundGradientTo: `${Colors.mainPurple}`,
    backgroundGradientFromOpacity: 0.7,
    backgroundGradientToOpacity: 0.2,
    decimalPlaces: 0,
    labelColor: () => Colors.mainGray,

    color: () => '#1b3fa250',
    style: {
      borderRadius: 5,
      color: '#1b3fa0',
    },
    propsForLabels: {
      fontSize: 10,
      fontWeight: 'bold',
    },
  },
  {
    backgroundColor: `${Colors.mainWhite}`,
    backgroundGradientFrom: `${Colors.mainPurple}`,
    backgroundGradientTo: `${Colors.lightGreen}`,
    backgroundGradientFromOpacity: 0.1,
    backgroundGradientToOpacity: 0.3,
    decimalPlaces: 0,
    barPercentage: 0.75,
    labelColor: () => Colors.mainGray,

    color: () => '#1b3fa250',
    style: {
      borderRadius: 5,

      color: '#1b3fa0',
    },
    propsForLabels: {
      fontSize: 10,
      fontWeight: 'bold',
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
