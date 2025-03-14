import React from 'react';
import {StyleSheet} from 'react-native';

import {Colors} from '../../constants/Colors';
import {width as w, height as h} from '../../constants/Metrics';
import Fonts from '../../constants/Fonts';

const {Families, Sizes} = Fonts;

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  imagecontainer: {
    marginTop: h * 0.2,
  },
});
