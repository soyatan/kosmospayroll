import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {TouchableIcon} from '../../Assets/Svgs/touchableIcon';
import ButtonWithText from '../Shared/Button/ButtonWithText';
import styles from './styles';
import {Icon} from './../../Assets/Svgs/icon';
const PaymentOptionsContainer = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.iconcontainer}>
          <Icon name={'dollar'} scale={1.3} color={'red'} />
          <Text style={styles.pinktext}>Payments</Text>
        </View>
        <View style={styles.iconcontainer}>
          <Icon name={'bonus'} scale={1.5} color={'red'} />
          <Text style={styles.pinktext}>Bonus</Text>
        </View>
        <View style={styles.iconcontainer}>
          <Icon name={'cut'} scale={1.5} color={'red'} />
          <Text style={styles.pinktext}>Deductions</Text>
        </View>
      </View>
    </>
  );
};

export default PaymentOptionsContainer;
