import React from 'react';
import {StyleSheet} from 'react-native';

import {width as w, height as h} from '../../constants/Metrics';
import Fonts from '../../constants/Fonts';
import {Colors} from '../../constants/Colors';

const {Families, Sizes} = Fonts;

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.mainWhite,
  },
  paycontainer: {
    flex: 1,
    backgroundColor: Colors.mainLightGray,
    marginHorizontal: w * 0.04,
    marginVertical: w * 0.03,
    borderRadius: w * 0.02,
    padding: w * 0.02,
  },

  rostercontainer: {
    flex: 1,
    marginTop: h * 0.11,
  },
  bigwhitetext: {
    fontFamily: Fonts.Families.bold,
    fontSize: Fonts.Sizes.thirty,
    color: Colors.mainWhite,
    marginBottom: w * 0.03,
  },
  blacktext: {
    fontFamily: Fonts.Families.medium,
    fontSize: Fonts.Sizes.fourteen,
  },
  welcometextcontainer: {
    alignItems: 'center',
    marginTop: h * 0.05,
  },
});
