import React, {useEffect} from 'react';
import {Text, TouchableOpacity, ActivityIndicator, View} from 'react-native';
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
  isloading,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          marginVertical: w * 0.025,

          backgroundColor: Colors[bg_color],
        },
      ]}
      onPress={!isloading ? onPress : null}>
      {iconname ? (
        <>
          <Icon name={'google'} scale={1.5} />
          <View style={{marginHorizontal: 5}}></View>
        </>
      ) : null}
      <Text style={[styles.blacktext, {color: Colors[text_color]}]}>
        {label}
      </Text>
      {isloading ? (
        <>
          <View style={{position: 'absolute', right: 20}}>
            <ActivityIndicator size="small" color="white" />
          </View>
        </>
      ) : null}
    </TouchableOpacity>
  );
};
