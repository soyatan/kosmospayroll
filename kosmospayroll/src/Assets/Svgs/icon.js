import {View} from 'react-native';
import React from 'react';

import {SVGS} from '.';
import {width} from '../../constants/Metrics';

export const Icon = ({name, scale, color}) => {
  const VecGr = SVGS[name];
  const size = scale * width * 0.05;
  return (
    <View style={{width: size, height: size}}>
      <VecGr width="100%" height="100%" fill={color ?? 'black'} />
    </View>
  );
};
