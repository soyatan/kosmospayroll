import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
export const Title = ({title}) => {
  return (
    <View style={styles.seperator}>
      <Text style={styles.seperatortext}>{title}</Text>
    </View>
  );
};
