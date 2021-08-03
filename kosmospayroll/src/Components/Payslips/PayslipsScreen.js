import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import DateContainer from '../DateContainer/DateContainer';
import styles from './styles';

const PayslipsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <DateContainer />
    </View>
  );
};

export default PayslipsScreen;
