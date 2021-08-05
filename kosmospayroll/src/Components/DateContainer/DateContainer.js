import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {generateFullDate} from '../../API/Helper';
import {TouchableIcon} from '../../Assets/Svgs/touchableIcon';
import styles from './styles';
import moment from 'moment';
const DateContainer = ({date}) => {
  const [curDate, setcurDate] = useState('');
  //console.log(Date.parse(date));
  useEffect(() => {
    if (date) {
      setcurDate(moment(date).format('DD-MMMM-YYYY'));
      const dayafter = Date.parse(moment(date).add(1, 'd'));
    }
  }, [date]);

  return (
    <View style={styles.headeradditioncontainer}>
      <View style={styles.container}>
        <TouchableIcon name={'calendar'} scale={1.4} />
        <Text>{curDate}</Text>
        <TouchableIcon name={'left'} scale={1.4} />
        <TouchableIcon name={'right'} scale={1.4} />
      </View>
    </View>
  );
};

export default DateContainer;
