import React from 'react';
import {StyleSheet} from 'react-native';

import {Colors} from '../../../constants/Colors';
import {width as w, height as h} from '../../../constants/Metrics';
import Fonts from '../../../constants/Fonts';

const {Families, Sizes} = Fonts;

export default styles = StyleSheet.create({
  inputcontainer: {
    height: h * 0.06,
    borderWidth: 0.7,
    opacity: 0.5,
    marginBottom: w * 0.02,
    paddingHorizontal: w * 0.02,
    width: '100%',
    borderRadius: w * 0.03,
    alignItems: 'center',
    flexDirection: 'row',
  },
  borderlessinput: {
    height: h * 0.06,
    opacity: 0.5,
    margin: w * 0.02,
    //paddingLeft: 10,
    width: '100%',
    borderBottomWidth: 0.3,
    alignItems: 'center',
    flexDirection: 'row',
  },
  textinput: {
    marginLeft: w * 0.02,
    marginRight: w * 0.01,
    flex: 1,
  },
});
