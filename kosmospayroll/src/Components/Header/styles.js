import React from 'react';
import {StyleSheet} from 'react-native';

import {Colors} from '../../constants/Colors';
import {width as w, height as h} from '../../constants/Metrics';
import Fonts from '../../constants/Fonts';

const {Families, Sizes} = Fonts;

export default styles = StyleSheet.create({
  headercontainer: {
    width: '100%',
    height: w * 0.13,
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headertitlebox: {
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  smalltext: {
    fontSize: Fonts.Sizes.twelve,
    color: 'black',
  },
  headerStyle: {
    backgroundColor: 'red',
    height: h * 0.08,
  },
});
