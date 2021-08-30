import React from 'react';
import {StyleSheet} from 'react-native';

import {width as w, height as h} from '../../constants/Metrics';
import Fonts from '../../constants/Fonts';
import {Colors} from '../../constants/Colors';

const {Families, Sizes} = Fonts;

export default styles = StyleSheet.create({
  container: {
    flexDirection: 'row',

    marginVertical: h * 0.005,
    marginHorizontal: w * 0.05,
    borderRadius: w * 0.1,
    paddingHorizontal: w * 0.01,
    paddingVertical: w * 0.002,
  },
  date: {
    flex: 1,
  },
  name: {
    flex: 2,
  },
  amount: {
    flex: 1,
  },
});
