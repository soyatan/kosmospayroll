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
    paddingHorizontal: w * 0.02,
  },
  modal: {
    backgroundColor: Colors.mainLightGray,
    marginTop: h * 0.3,
    height: h * 0.5,
    justifyContent: 'center',
    borderWidth: 0.5,
    alignItems: 'center',
    margin: w * 0.03,
    borderRadius: w * 0.05,
  },
  shadytext: {
    fontSize: Fonts.Sizes.ten,
    color: Colors.mainGray,
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
  bigpinktext: {
    fontFamily: Fonts.Families.medium,
    fontSize: Fonts.Sizes.fourteen,
    color: Colors.mainPink,
    fontWeight: 'bold',
  },
  settingrow: {
    alignItems: 'flex-start',
    marginVertical: h * 0.01,
    height: h * 0.08,
    flexDirection: 'row',
    paddingHorizontal: w * 0.02,
    backgroundColor: Colors.mainLightGray,
    borderRadius: w * 0.02,
  },
  buttoncontainer: {
    height: h * 0.08,
    width: w * 0.9,
    alignSelf: 'center',
    alignItems: 'stretch',
  },
  modalbutton: {
    height: h * 0.08,
    width: w * 0.6,
    alignSelf: 'center',
    alignItems: 'stretch',
  },
  leftcontainer: {
    flex: 2,
    height: '100%',
    justifyContent: 'center',
    borderRightWidth: 0.3,
  },
  rightcontainer: {
    flex: 2,
    height: '100%',
    //alignItems: 'flex-end',
    justifyContent: 'center',
  },
  rightcontaineruser: {
    flex: 2,
    height: '100%',

    justifyContent: 'center',
  },
  workhourscontainer: {
    paddingLeft: w * 0.05,
    flex: 1,
    justifyContent: 'center',
  },
  pickeritem: {
    fontSize: Fonts.Sizes.ten,
    paddingLeft: w * 0.05,
  },
});
