import React from 'react';
import {StyleSheet} from 'react-native';

import {width as w, height as h} from '../../constants/Metrics';
import Fonts from '../../constants/Fonts';
import {Colors} from '../../constants/Colors';

const {Families, Sizes} = Fonts;

export default styles = StyleSheet.create({
  container: {
    width: w * 0.9,
    backgroundColor: Colors.mainLightGray,
    alignSelf: 'center',
    height: h * 0.1,
    borderRadius: w,
    paddingHorizontal: w * 0.03,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.mainLightGray,
    flexDirection: 'row',
    position: 'absolute',
    alignContent: 'stretch',
    shadowColor: Colors.mainPurple,
    shadowOpacity: 0.5,
    shadowRadius: 12,
    shadowOffset: {
      height: 4,
      width: 4,
    },
  },
  pendingleftcontainer: {
    flex: 2,
    height: '50%',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingHorizontal: w * 0.05,
    borderRightWidth: 1,
  },
  pendingrightcontainer: {
    flex: 2,
    paddingLeft: w * 0.05,
    height: '80%',
    paddingVertical: h * 0.01,
    justifyContent: 'center',
  },
  headeradditioncontainer: {
    backgroundColor: Colors.mainGray,
    width: '100%',
    height: h * 0.04,
    position: 'absolute',
  },
  headertext: {
    color: Colors.mainGray,
    fontWeight: 'bold',
    fontSize: Fonts.Sizes.fourteen,
  },
  greenmoneytext: {
    fontSize: Fonts.Sizes.fourteen,
    color: Colors.green,
    fontWeight: 'bold',
  },
  redmoneytext: {
    fontSize: Fonts.Sizes.fourteen,
    color: Colors.red,
    fontWeight: 'bold',
  },
});
