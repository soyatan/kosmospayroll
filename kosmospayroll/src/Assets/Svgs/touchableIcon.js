import {View, TouchableOpacity} from 'react-native';
import React from 'react';

import {SVGS} from '.';
import {width} from '../../constants/Metrics';

export const TouchableIcon = ({name, scale, onPress, color}) => {
  const VecGr = SVGS[name];
  const size = scale * width * 0.05;
  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        flex: 1,
        height: '100%',
        justifyContent: 'center',
      }}
      onPress={onPress}>
      <VecGr width={size} height={size} fill={color ?? 'black'} />
    </TouchableOpacity>
  );
};
