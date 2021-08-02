import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {width as w, height as h} from '../../../constants/Metrics';
import styles from './styles';
import {Colors} from '../../../constants/Colors';
import {Icon} from '../../../Assets/Svgs/icon';

export default ButtonWithText = ({
  label,
  onPress,
  bg_color,
  text_color,
  name,
  scale,
}) => {
  return (
    <TouchableOpacity style={[styles.bigbutton]} onPress={onPress}>
      <>
        <Text style={styles.smallwhitetext}>{label}</Text>
        <Icon name={name} scale={scale} />
      </>
    </TouchableOpacity>
  );
};
