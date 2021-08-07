import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {TouchableIcon} from '../../Assets/Svgs/touchableIcon';
import ButtonWithText from '../Shared/Button/ButtonWithText';
import styles from './styles';
const AttendanceOption = ({title, color, onPress, textcolor}) => {
  return (
    <>
      <TouchableOpacity
        style={[styles.attoption, {backgroundColor: color}]}
        onPress={onPress}>
        <Text style={[styles.whitetext, {color: textcolor}]}>{title}</Text>
      </TouchableOpacity>
    </>
  );
};

export default AttendanceOption;
