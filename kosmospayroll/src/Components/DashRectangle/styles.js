import React from 'react';
import {StyleSheet} from 'react-native';

import {width as w, height as h} from '../../constants/Metrics';
import Fonts from '../../constants/Fonts';
import {Colors} from '../../constants/Colors';

const {Families, Sizes} = Fonts;

export default styles = StyleSheet.create({
  container: {
    width: w * 0.015,
    height: h * 0.03,
    borderRadius: w * 0.03,
    borderWidth: 1,
    marginHorizontal: w * 0.03,
  },
});
