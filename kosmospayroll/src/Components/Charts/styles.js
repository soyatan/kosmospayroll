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
  chart: {
    height: h * 0.17,
  },
  piechart: {},
});
