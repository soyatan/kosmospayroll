import React from 'react';
import {StyleSheet} from 'react-native';

import {width as w, height as h} from '../../constants/Metrics';
import Fonts from '../../constants/Fonts';
import {Colors} from '../../constants/Colors';

const {Families, Sizes} = Fonts;

export default styles = StyleSheet.create({
  container: {
    width: w * 0.95,
    borderWidth: 1,
    alignSelf: 'center',
    height: h * 0.1,
    borderRadius: w * 0.05,
    paddingHorizontal: w * 0.03,
    marginTop: h * 0.01,
    paddingVertical: h * 0.005,
    flexDirection: 'row',
  },
  leftcontainer: {
    flex: 5,
    justifyContent: 'space-around',
    paddingHorizontal: w * 0.03,
    paddingVertical: h * 0.01,
  },
  rightcontainer: {
    flex: 2,
    paddingHorizontal: w * 0.03,
    justifyContent: 'space-around',
    paddingVertical: h * 0.01,
    alignItems: 'flex-end',
  },
  worktype: {
    backgroundColor: Colors.mainGray,
    flex: 1,
    marginHorizontal: w * 0.03,
    borderRadius: w * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});
