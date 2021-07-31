import React from 'react';
import {StyleSheet} from 'react-native';

import {Colors} from '../../constants/Colors';
import {width as w, height as h} from '../../constants/Metrics';
import Fonts from '../../constants/Fonts';

const {Families, Sizes} = Fonts;

export default styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 20,
  },
  contentelement: {alignItems: 'flex-start', paddingVertical: 10},
});
