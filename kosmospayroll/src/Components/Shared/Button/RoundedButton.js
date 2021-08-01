import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {width as w, height as h} from '../../../constants/Metrics';
import styles from './styles';
import {Colors} from './../../../constants/Colors';
import {Icon} from './../../../Assets/Svgs/icon';

export default RoundedButton = ({
  label,
  onPress,
  pressable,
  bg_color,
  text_color,
  iconname,
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
                marginVertical: w * 0.025,

                backgroundColor: Colors[bg_color],
              },
            ]
      }
      onPress={onPress}>
      {iconname ? (
        <>
          <Icon name={'google'} scale={1.5} />
          <View style={{marginHorizontal: 5}}></View>
        </>
      ) : null}
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
