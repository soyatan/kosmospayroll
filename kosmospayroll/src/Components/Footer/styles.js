import React from 'react';
import {StyleSheet} from 'react-native';

import {Colors} from '../../constants/Colors';
import {width as w, height as h} from '../../constants/Metrics';
import Fonts from '../../constants/Fonts';

const {Families, Sizes} = Fonts;

export default styles = StyleSheet.create({
  footercontainer: {
    width: '100%',
    borderTopColor: Colors.mainLightGray,
    borderTopWidth: 0.5,
    height: w * 0.19,
    backgroundColor: Colors.mainGray,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  footeritem: {
    flexDirection: 'column',
    padding: w * 0.01,

    justifyContent: 'flex-start',
    borderWidth: 1,
    alignItems: 'center',
  },
  smalltext: {
    fontSize: Fonts.Sizes.twelve,
    color: 'black',
  },
});
