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
  chartcontainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  paycontainer: {
    flex: 1,
    backgroundColor: '#F8F8EE',

    marginHorizontal: w * 0.04,
    marginVertical: w * 0.03,
    borderRadius: w * 0.02,
    padding: w * 0.02,
    borderWidth: 0.5,
    borderColor: Colors.mainLightGray,
    justifyContent: 'flex-start',
    shadowColor: Colors.mainPurple,

    shadowOpacity: 0.5,
    shadowRadius: 12,
    shadowOffset: {
      height: 4,
      width: 4,
    },
  },
  datarowcontainer: {
    backgroundColor: Colors.mainLightGray,
    width: '100%',
    height: h * 0.038,
    marginVertical: w * 0.01,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: w * 0.04,
    paddingRight: w * 0.02,
    flexDirection: 'row',
    borderRadius: w * 0.05,
  },
  iconcontainer: {
    backgroundColor: Colors.mainPink,
    width: '100%',
    height: h * 0.04,
    marginVertical: w * 0.01,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: w * 0.04,
    paddingRight: w * 0.02,
    flexDirection: 'row',
    borderRadius: w * 0.05,

    elevation: 10,
    shadowOffset: {
      width: 1,
      height: 10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
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
    color: Colors.mainBlack,
  },
  welcometextcontainer: {
    alignItems: 'center',
    marginTop: h * 0.05,
  },
  whitetext: {
    fontFamily: Fonts.Families.medium,
    fontSize: Fonts.Sizes.fourteen,
    fontWeight: 'bold',
    color: Colors.mainWhite,
  },
});
