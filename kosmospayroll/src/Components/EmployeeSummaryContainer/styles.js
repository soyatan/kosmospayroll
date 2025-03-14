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
    borderColor: Colors.mainLightGray,
    paddingHorizontal: w * 0.015,
    marginTop: h * 0.01,
    paddingVertical: h * 0.005,
    flexDirection: 'row',
    shadowColor: Colors.mainPurple,
    backgroundColor: Colors.mainLightGray,
    shadowOpacity: 0.5,
    shadowRadius: 12,
    shadowOffset: {
      height: 4,
      width: 4,
    },
  },
  leftcontainer: {
    flex: 2,
    justifyContent: 'space-around',
    paddingHorizontal: w * 0.02,
    paddingVertical: h * 0.01,
  },
  rightcontainer: {
    flex: 2,
    paddingHorizontal: w * 0.02,
    justifyContent: 'space-around',

    alignItems: 'flex-end',
  },
  rightinsidecontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    width: '100%',
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
  blackboldtext: {
    fontSize: Fonts.Sizes.twelve,
    fontWeight: 'bold',
  },
  blacktext: {
    fontSize: Fonts.Sizes.twelve,
  },
  pinktext: {
    fontSize: Fonts.Sizes.ten,
    color: Colors.mainPink,
  },
});
