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
    height: h * 0.06,
    borderRadius: w * 0.05,
    paddingHorizontal: w * 0.015,
    marginTop: h * 0.01,
    paddingVertical: h * 0.01,
    flexDirection: 'row',
  },
  bigcontainer: {
    width: w * 0.95,
    borderWidth: 1,
    alignSelf: 'center',
    height: h * 0.11,
    borderRadius: w * 0.05,
    paddingHorizontal: w * 0.015,
    marginTop: h * 0.01,
    paddingVertical: h * 0.01,
    flexDirection: 'row',
  },
  dateinput: {
    flex: 1,
    justifyContent: 'center',
    borderRightWidth: 1,
  },
  leftcontainer: {
    flex: 1.6,
    justifyContent: 'space-around',
    paddingHorizontal: w * 0.02,

    //paddingVertical: h * 0.01,
  },
  newrightcontainer: {
    flex: 6,
    paddingHorizontal: w * 0.02,

    flexDirection: 'row',
  },
  rightcontainer: {
    flex: 6,
    paddingHorizontal: w * 0.02,
    //justifyContent: 'space-around',

    //alignItems: 'flex-end',
  },
  textinput: {flex: 1, alignSelf: 'stretch', opacity: 0.5},
  rightinsidecontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    width: '100%',
  },
  newinsidecontainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flex: 1,
    //marginLeft: w * 0.02,
    //height: '100%',
    //alignItems: 'center',
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
});
