import React from 'react';
import {StyleSheet} from 'react-native';

import {width as w, height as h} from '../../../constants/Metrics';
import Fonts from '../../../constants/Fonts';
import {Colors} from './../../../constants/Colors';

const {Families, Sizes} = Fonts;

export default styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.mainWhite,
    borderRadius: w * 0.1,
    margin: w * 0.01,
    height: h * 0.06,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonpr: {
    backgroundColor: Colors.darkBlue,
    borderRadius: w * 0.5,
    margin: w * 0.01,
    height: h * 0.06,
    marginTop: h * 0.02,

    justifyContent: 'center',
    alignItems: 'center',
  },
  whitetext: {
    color: Colors.mainWhite,
    fontSize: Fonts.Sizes.fourteen,
    fontFamily: Fonts.Families.bold,
  },
  blacktext: {
    color: Colors.mainBlack,
    fontSize: Fonts.Sizes.fourteen,
    fontFamily: Fonts.Families.bold,
  },
});
