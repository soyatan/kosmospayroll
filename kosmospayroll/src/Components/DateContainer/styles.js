import React from 'react';
import {StyleSheet} from 'react-native';

import {width as w, height as h} from '../../constants/Metrics';
import Fonts from '../../constants/Fonts';
import {Colors} from './../../constants/Colors';

const {Families, Sizes} = Fonts;

export default styles = StyleSheet.create({
  container: {
    width: w * 0.85,
    backgroundColor: Colors.mainLightGray,
    alignSelf: 'center',
    height: h * 0.07,
    borderRadius: w * 0.1,
    paddingHorizontal: w * 0.03,
    justifyContent: 'space-between',
    alignItems: 'center',

    flexDirection: 'row',
    position: 'absolute',
    alignContent: 'stretch',
  },
  iconcontainer: {
    width: w * 0.15,
  },
  headeradditioncontainer: {
    backgroundColor: Colors.mainGray,
    width: '100%',
    height: h * 0.04,
    position: 'absolute',
  },
});
