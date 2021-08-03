import React from 'react';
import {StyleSheet} from 'react-native';

import {width as w, height as h} from '../../constants/Metrics';
import Fonts from '../../constants/Fonts';
import {Colors} from '../../constants/Colors';

const {Families, Sizes} = Fonts;

export default styles = StyleSheet.create({
  addinfocontainer: {
    width: w * 0.9,
    height: h * 0.7,
    marginTop: h * 0.02,
    backgroundColor: Colors.mainLightGray,
    borderRadius: w * 0.1,
    alignItems: 'center',
    flex: 1,
  },
  headeradditioncontainer: {
    backgroundColor: Colors.mainGray,
    height: h * 0.03,
    alignItems: 'center',
  },
  inforow: {
    flexDirection: 'row',
    width: '100%',
    height: h * 0.07,
    alignItems: 'stretch',
    justifyContent: 'space-between',
    marginHorizontal: w * 0.01,
    paddingHorizontal: w * 0.02,
  },
  inputcontainer: {
    height: '100%',
    width: w * 0.6,
    alignItems: 'center',
    flex: 3,
    justifyContent: 'center',
  },
});
