import React from 'react';
import {StyleSheet} from 'react-native';

import {width as w, height as h} from '../../constants/Metrics';
import Fonts from '../../constants/Fonts';
import {Colors} from './../../constants/Colors';

const {Families, Sizes} = Fonts;

export default styles = StyleSheet.create({
  addinfocontainer: {
    width: w * 0.9,
    //height: h * 0.7,
    marginTop: h * 0.02,
    paddingTop: w * 0.03,
    paddingBottom: w * 0.01,
    backgroundColor: Colors.mainLightGray,
    borderRadius: w * 0.05,
    alignItems: 'center',
    //flex: 1,
    marginHorizontal: w * 0.01,
    paddingHorizontal: w * 0.02,
    marginBottom: h * 0.02,
  },
  headeradditioncontainer: {
    backgroundColor: Colors.mainGray,
    height: h * 0.03,
    alignItems: 'center',
  },
  savebutton: {
    width: w * 0.4,
  },
  inforow: {
    flexDirection: 'row',
    width: '100%',
    height: h * 0.07,
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
  inputcontainer: {
    height: '100%',
    width: w * 0.6,
    alignItems: 'center',
    flex: 5,
    justifyContent: 'center',
  },
  checkboxcontainer: {
    flexDirection: 'row',
    flex: 5,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  inputtitle: {
    flex: 2.5,
    fontSize: Fonts.Sizes.fourteen,
    fontWeight: 'bold',
    textAlignVertical: 'center',
  },
  texttitle: {
    fontSize: Fonts.Sizes.twelve,
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    textAlignVertical: 'center',
    color: Colors.mainPink,
  },
});
