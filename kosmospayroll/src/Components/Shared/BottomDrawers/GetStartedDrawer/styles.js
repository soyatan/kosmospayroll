import React from 'react';
import {StyleSheet} from 'react-native';

import {width as w, height as h} from '../../../../constants/Metrics';
import Fonts from '../../../../constants/Fonts';
import {Colors} from './../../../../constants/Colors';

const {Families, Sizes} = Fonts;

export default styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.mainGray,
    justifyContent: 'center',
    borderTopLeftRadius: w * 0.15,
    borderTopRightRadius: w * 0.15,
  },
  signincontainer: {
    backgroundColor: Colors.mainWhite,
    justifyContent: 'center',
    borderTopLeftRadius: w * 0.15,
    borderTopRightRadius: w * 0.15,
  },
  contentContainer: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 20,
    borderTopLeftRadius: w * 0.5,
    borderTopRightRadius: w * 0.5,
    padding: w * 0.04,
  },
  contentelement: {alignItems: 'flex-start', paddingVertical: w * 0.02},

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
});
