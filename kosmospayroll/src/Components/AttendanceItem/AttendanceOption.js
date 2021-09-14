import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
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
