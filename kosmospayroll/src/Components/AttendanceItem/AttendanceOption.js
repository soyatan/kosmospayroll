import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {TouchableIcon} from '../../Assets/Svgs/touchableIcon';
import ButtonWithText from '../Shared/Button/ButtonWithText';
import styles from './styles';
const AttendanceOption = ({title, color}) => {
  return (
    <>
      <TouchableOpacity style={styles.attoption}>
        <Text style={styles.whitetext}>{title}</Text>
      </TouchableOpacity>
    </>
  );
};

export default AttendanceOption;
