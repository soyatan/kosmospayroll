import React from 'react';
import {StyleSheet} from 'react-native';

import {width as w, height as h} from '../../constants/Metrics';
import Fonts from '../../constants/Fonts';
import {Colors} from '../../constants/Colors';

const {Families, Sizes} = Fonts;

export default styles = StyleSheet.create({
  container: {
    width: w * 0.98,
    borderWidth: 0.3,
    alignSelf: 'center',
    height: h * 0.1,
    paddingHorizontal: w * 0.01,
    marginTop: h * 0.02,
    paddingVertical: h * 0.005,

    flexDirection: 'row',
  },
  leftcontainer: {
    flex: 5,
    justifyContent: 'space-between',
    paddingHorizontal: w * 0.01,
    paddingVertical: h * 0.005,
    borderRightWidth: 0.3,
    borderRightColor: 'gray',
  },
  rightcontainer: {
    flex: 1.4,
    paddingHorizontal: w * 0.01,
    justifyContent: 'space-around',
    paddingVertical: h * 0.01,
    alignItems: 'flex-end',
  },
  dropdowncontainer: {
    marginRight: w * 0.01,
    marginTop: w * 0.01,
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
  attoption: {
    height: h * 0.035,
    paddingHorizontal: w * 0.02,
    marginHorizontal: w * 0.01,
    backgroundColor: 'red',
    borderRadius: w * 0.01,
    width: w * 0.22,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
