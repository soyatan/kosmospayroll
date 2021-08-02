import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const RosterScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.welcometextcontainer}></View>

      <Text>HELLO FROM THE ROSTER</Text>
    </View>
  );
};

export default RosterScreen;
