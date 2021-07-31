import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {width as w, height as h} from '../../../constants/Metrics';
import styles from './styles';
import {Colors} from './../../../constants/Colors';

export default RoundedButton = ({
  label,
  onPress,
  pressable,
  width_scale,
  bg_color,
  text_color,
}) => {
  return (
    <TouchableOpacity
      style={
        pressable
          ? [
              styles.buttonpr,
              {
                width: '100%',
                alignSelf: 'center',
                justifyContent: 'center',
                marginVertical: w * 0.025,
              },
            ]
          : [
              styles.button,
              {
                width: '100%',
                alignSelf: 'center',
                justifyContent: 'center',
                marginVertical: w * 0.025,

                backgroundColor: Colors[bg_color],
              },
            ]
      }
      onPress={onPress}>
      <Text
        style={
          pressable
            ? styles.whitetext
            : [styles.blacktext, {color: Colors[text_color]}]
        }>
        {label}
      </Text>
    </TouchableOpacity>
  );
};
