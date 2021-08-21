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
  balancerow: {
    backgroundColor: Colors.mainPink,
    marginVertical: h * 0.02,
    marginHorizontal: w * 0.02,
    borderRadius: w,
    paddingHorizontal: w * 0.03,
    height: h * 0.06,
    flexDirection: 'row',
  },
  balanceitem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addpaymentrow: {backgroundColor: 'red', height: h * 0.08},
  paymentlist: {
    backgroundColor: 'yellow',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: w * 0.03,
    marginHorizontal: w * 0.02,
  },
  addpaymentcontainer: {
    backgroundColor: 'yellow',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: w * 0.03,
    marginHorizontal: w * 0.02,
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
