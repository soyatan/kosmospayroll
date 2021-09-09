import React from 'react';
import {StyleSheet} from 'react-native';

import {width as w, height as h} from '../../constants/Metrics';
import Fonts from '../../constants/Fonts';
import {Colors} from '../../constants/Colors';

const {Families, Sizes} = Fonts;

export default styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 0.5,
    marginHorizontal: w * 0.02,
    paddingHorizontal: w * 0.01,
    paddingVertical: w * 0.008,
    borderColor: Colors.mainLightGray,
  },
  containeralt: {
    flexDirection: 'row',
    backgroundColor: Colors.mainPink,
    borderWidth: 0.5,
    borderColor: Colors.mainLightGray,
    marginHorizontal: w * 0.02,
    paddingHorizontal: w * 0.01,
    paddingVertical: w * 0.008,
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
