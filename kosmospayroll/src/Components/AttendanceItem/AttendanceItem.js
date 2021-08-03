import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {TouchableIcon} from '../../Assets/Svgs/touchableIcon';
import ButtonWithText from '../Shared/Button/ButtonWithText';
import styles from './styles';
import AttendanceOption from './AttendanceOption';
import {Icon} from '../../Assets/Svgs/icon';
const AttendanceItem = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.leftcontainer}>
          <Text style={styles.whitetext}>Abdi Umayung</Text>
          <View style={{flexDirection: 'row'}}>
            <AttendanceOption title={'Absent'} color={'red'} />
            <AttendanceOption title={'Absent'} color={'red'} />
            <AttendanceOption title={'Absent'} color={'red'} />
          </View>
        </View>
        <View style={styles.rightcontainer}>
          <Text style={styles.whitetext}>10.00 hrs</Text>
          <Text style={styles.whitetext}>OT 2.00 hrs</Text>
          <View style={styles.dropdowncontainer}>
            <Icon name={'down'} scale={1} />
          </View>
        </View>
      </View>
    </>
  );
};

export default AttendanceItem;
