import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import moment from 'moment';
import styles from './styles';
import {formatCurrency} from '../../API/Helper';

const PayslipItem = ({item, index, currency}) => {
  const isEven = number => {
    if (number % 2 === 0) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <View style={isEven(index) ? styles.container : styles.containeralt}>
      <View style={styles.date}>
        <Text>{moment(item.date).format('YYYY-MM-DD')}</Text>
      </View>
      <View style={styles.name}>
        <Text>{item.name}</Text>
      </View>
      <View style={styles.amount}>
        <Text>{formatCurrency(item.amount, currency)}</Text>
      </View>
    </View>
  );
};

export default PayslipItem;
