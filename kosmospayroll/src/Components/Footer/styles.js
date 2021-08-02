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
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  footeritem: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
    height: '100%',
    paddingTop: h * 0.01,
  },
  smalltext: {
    fontSize: Fonts.Sizes.twelve,
    color: 'black',
  },
  smallwhitetext: {fontSize: Fonts.Sizes.twelve, color: 'white'},
});
