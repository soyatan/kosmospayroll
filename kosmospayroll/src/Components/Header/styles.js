import React from 'react';
import {StyleSheet} from 'react-native';

import {Colors} from '../../constants/Colors';
import {width as w, height as h} from '../../constants/Metrics';
import Fonts from '../../constants/Fonts';

const {Families, Sizes} = Fonts;

export default styles = StyleSheet.create({
  headercontainer: {
    width: '100%',
    height: h * 0.1,
    backgroundColor: Colors.mainGray,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headertitlebox: {
    alignItems: 'center',
  },
  smalltext: {
    fontSize: Fonts.Sizes.twelve,
    color: 'black',
  },
  headerStyle: {
    backgroundColor: 'red',
    height: h * 0.08,
  },
  bigwhitetext: {
    fontFamily: Fonts.Families.bold,
    fontSize: Fonts.Sizes.twentysix,
    color: Colors.mainWhite,
    marginBottom: w * 0.03,
  },
});
