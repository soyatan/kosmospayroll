import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import moment from 'moment';
import styles from './styles';
import {formatCurrency} from '../../API/Helper';

const PayslipItem = ({item, currency}) => {
  return (
    <View style={styles.container}>
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
