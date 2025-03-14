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
  seperator: {
    backgroundColor: Colors.mainGray,
    height: h * 0.035,
    alignItems: 'center',
    paddingHorizontal: w * 0.03,
    marginHorizontal: w * 0.02,
    marginTop: w * 0.02,
    justifyContent: 'space-between',
    borderRadius: w * 0.02,
    flexDirection: 'row',
    shadowColor: Colors.mainPurple,
    borderColor: Colors.mainLightGray,
    shadowOpacity: 0.5,
    shadowRadius: 12,
    shadowOffset: {
      height: 4,
      width: 4,
    },
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
  seperatortext: {
    fontFamily: Fonts.Families.monoton,
    fontSize: Fonts.Sizes.fourteen,
    color: Colors.mainWhite,
  },
});
