import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {TouchableIcon} from '../../Assets/Svgs/touchableIcon';
import styles from './styles';
const DateContainer = () => {
  return (
    <View style={styles.headeradditioncontainer}>
      <View style={styles.container}>
        <TouchableIcon name={'calendar'} scale={1.4} />
        <Text>01 January 2021</Text>
        <TouchableIcon name={'left'} scale={1.4} />
        <TouchableIcon name={'right'} scale={1.4} />
      </View>
    </View>
  );
};

export default DateContainer;
