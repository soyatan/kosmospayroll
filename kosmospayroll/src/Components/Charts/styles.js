import React from 'react';
import {StyleSheet} from 'react-native';

import {width as w, height as h} from '../../constants/Metrics';
import Fonts from '../../constants/Fonts';
import {Colors} from '../../constants/Colors';

const {Families, Sizes} = Fonts;

export default styles = StyleSheet.create({
  chartstyle: {
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'center',
  },
  stackchartfirst: {
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'center',
  },
  stackchart: {
    position: 'absolute',
    left: w * 0.05,
  },
  multibarchart: {height: h * 0.22},
  chartstyleweekly: {
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'center',
  },
  chart: {
    height: h * 0.27,
  },
  dashchart: {
    height: h * 0.18,
  },
  stackcharts: {
    height: h * 0.17,
  },
  piechart: {},
  chartheadertext: {
    fontSize: Fonts.Sizes.twelve,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});
