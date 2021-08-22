import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';
const PaymentItem = ({}) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.leftcontainer}>
          <Text style={styles.blackboldtext}>22.07.2010</Text>
        </View>
        <View style={styles.rightcontainer}>
          <View style={styles.rightinsidecontainer}>
            <Text style={styles.blacktext}>As an advance </Text>
            <Text style={styles.blackboldtext}>134.23$</Text>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.leftcontainer}>
          <Text style={styles.blackboldtext}>22.07.2010</Text>
        </View>
        <View style={styles.rightcontainer}>
          <View style={styles.rightinsidecontainer}>
            <Text style={styles.blacktext}>As an advance </Text>
            <Text style={styles.blackboldtext}>134.23$</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default PaymentItem;
