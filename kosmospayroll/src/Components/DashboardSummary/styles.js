import React from 'react';
import {StyleSheet} from 'react-native';

import {width as w, height as h} from '../../constants/Metrics';
import Fonts from '../../constants/Fonts';
import {Colors} from '../../constants/Colors';

const {Families, Sizes} = Fonts;

export default styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.mainLightGray,
    flexDirection: 'row',
    width: w * 0.95,
    height: h * 0.1,
    borderRadius: w * 0.03,
    marginTop: w * 0.01,
    marginBottom: w * 0.03,
  },
  dashinfocontainer: {
    width: w * 0.35,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
