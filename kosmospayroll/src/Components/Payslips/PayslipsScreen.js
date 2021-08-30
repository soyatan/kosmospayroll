import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {createPaymentsList} from '../../API/dbfunctions';
import {employeesSelector} from '../../redux/employeesReducer';
import DateContainer from '../DateContainer/DateContainer';
import styles from './styles';
import PayslipItem from './../PayslipItem/PayslipItem';
import {userSelector} from './../../redux/userReducer';

const PayslipsScreen = ({navigation}) => {
  const employees = useSelector(employeesSelector);
  const paymentslist = createPaymentsList(employees);
  const user = useSelector(userSelector);
  return (
    <View style={styles.container}>
      <FlatList
        data={paymentslist}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
          return <PayslipItem item={item} currency={user.currency} />;
        }}
      />
    </View>
  );
};

export default PayslipsScreen;
