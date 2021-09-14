import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {TouchableIcon} from '../../Assets/Svgs/touchableIcon';
import styles from './styles';
import moment from 'moment';
const DateContainer = ({curDate, setcurDate}) => {
  return (
    <View style={styles.headeradditioncontainer}>
      <View style={styles.container}>
        <View style={styles.iconcontainer}>
          <TouchableIcon name={'calendar'} scale={1.4} />
        </View>
        <Text>{moment(curDate).format('DD-MMMM-YYYY')}</Text>
        <View style={styles.iconcontainer}>
          <TouchableIcon
            name={'left'}
            scale={1}
            onPress={() => console.log('bum')}
            onPress={() => setcurDate(moment(curDate).subtract(1, 'd'))}
          />
        </View>
        <View style={styles.iconcontainer}>
          <TouchableIcon
            name={'right'}
            scale={1}
            onPress={() => {
              setcurDate(moment(curDate).add(1, 'd'));
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default DateContainer;
