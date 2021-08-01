import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const DashboardScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.welcometextcontainer}></View>

      <Text>HELLO</Text>
    </View>
  );
};

export default DashboardScreen;
