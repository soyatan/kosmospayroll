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
  chartstyleweekly: {
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'center',
    height: h * 0.18,
  },
  chart: {
    height: h * 0.27,
  },
  dashchart: {
    height: h * 0.18,
  },
  piechart: {},
  chartheadertext: {
    fontSize: Fonts.Sizes.twelve,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});
