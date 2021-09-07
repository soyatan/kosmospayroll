import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import {
  calculateEarnings,
  calculateGlobalEarnings,
  calculateTotalEarnings,
  fetchEmployees,
} from '../../API/dbfunctions';
import {BalanceChart} from '../Charts/BalanceChart';
import {EmployeeChart} from '../Charts/EmployeeChart';
import DashRectangle from '../DashRectangle/DashRectangle';
import styles from './styles';
import {
  calculateGlobalBalance,
  calculateGlobalPayments,
} from './../../API/dbfunctions';

const EarningsChart = ({employees}) => {
  useEffect(() => {
    if (employees) {
      console.log(calculateGlobalBalance(employees));
      console.log(calculateGlobalPayments(employees));
      console.log(calculateGlobalEarnings(employees));
    }
  }, [employees]);

  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <View style={styles.dashinfocontainer}>
          <DashRectangle />
          <View>
            <Text>$41.500</Text>
            <Text>TOTAL EARNINGS</Text>
          </View>
        </View>

        <View style={styles.dashinfocontainer}>
          <DashRectangle />
          <View>
            <Text>$41.500</Text>
            <Text>TOTAL PAYMENTS</Text>
          </View>
        </View>
        <View style={styles.dashinfocontainer}>
          <DashRectangle />
          <View>
            <Text>$41.500</Text>
            <Text>TOTAL BALANCE</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',

          flex: 1,
        }}>
        <BalanceChart />
      </View>
    </View>
  );
};

export default EarningsChart;
