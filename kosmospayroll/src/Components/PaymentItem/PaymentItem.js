import moment from 'moment';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {formatCurrency} from '../../API/Helper';

import styles from './styles';
const PaymentItem = ({item, currency}) => {
  if (!item || !item.date || !item.amount) {
    return null;
  } else
    return (
      <>
        <View style={styles.container}>
          <View style={styles.leftcontainer}>
            <Text style={styles.blackboldtext}>
              {moment(item.date).format('DD-MM-YYYY')}
            </Text>
          </View>
          <View style={styles.rightcontainer}>
            <View style={styles.rightinsidecontainer}>
              <Text style={styles.blacktext}>{item.note} </Text>
              <Text style={styles.blackboldtext}>
                {formatCurrency(item.amount, currency)}
              </Text>
            </View>
          </View>
        </View>
      </>
    );
};

export default PaymentItem;
