import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {generateFullDate} from '../../API/Helper';
import {TouchableIcon} from '../../Assets/Svgs/touchableIcon';
import styles from './styles';
const DateContainer = () => {
  useEffect(() => {
    const today = new Date();
    const dateToShow = generateFullDate(today);
    console.log(dateToShow);
  }, []);
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
