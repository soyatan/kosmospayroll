import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
export const Title = ({title, quantity}) => {
  return (
    <View elevation={5} style={styles.seperator}>
      <Text style={styles.seperatortext}>{title}</Text>
      <Text style={styles.seperatortext}>{`${quantity} total`}</Text>
    </View>
  );
};
