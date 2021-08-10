import React from 'react';
import {StyleSheet} from 'react-native';

import {Colors} from '../../constants/Colors';
import {width as w, height as h} from '../../constants/Metrics';
import Fonts from '../../constants/Fonts';

const {Families, Sizes} = Fonts;

export default styles = StyleSheet.create({
  headercontainer: {
    width: '100%',
    height: h * 0.06,
    backgroundColor: Colors.mainGray,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconcontainer: {
    height: h * 0.06,
    width: h * 0.06,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headertitlebox: {
    alignItems: 'center',
  },
  smalltext: {
    fontSize: Fonts.Sizes.twelve,
    color: 'black',
  },
  headersmalltext: {
    color: Colors.mainWhite,
    fontSize: Fonts.Sizes.twelve,
  },
  headersmallertext: {
    color: Colors.mainWhite,
    fontSize: Fonts.Sizes.ten,
  },
  headerStyle: {
    backgroundColor: 'red',
    height: h * 0.08,
  },
  headertextcontainer: {
    flex: 1,
    paddingLeft: w * 0.03,
  },
  bigwhitetext: {
    fontFamily: Fonts.Families.bold,
    fontSize: Fonts.Sizes.twentysix,
    color: Colors.mainWhite,
    marginBottom: w * 0.03,
  },
  employeeheader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: w * 0.03,
    paddingLeft: w * 0.01,
  },
});
