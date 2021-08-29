import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';

import styles from './styles';

const PayslipItem = ({item}) => {
  return (
    <View style={styles.container}>
      <Text>{item.date}</Text>
      <Text>{item.amount}</Text>
      <Text>{item.id}</Text>
    </View>
  );
};

export default PayslipItem;
