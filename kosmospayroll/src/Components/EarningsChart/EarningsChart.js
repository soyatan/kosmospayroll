import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import {fetchEmployees} from '../../API/dbfunctions';
import {BalanceChart} from '../Charts/BalanceChart';
import {EmployeeChart} from '../Charts/EmployeeChart';
import DashRectangle from '../DashRectangle/DashRectangle';
import styles from './styles';

const EarningsChart = () => {
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
