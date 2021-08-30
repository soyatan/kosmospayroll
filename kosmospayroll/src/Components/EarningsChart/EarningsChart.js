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
      <View>
        <View style={styles.dashinfocontainer}>
          <DashRectangle />
          <Text>26 Total Employees</Text>
        </View>
        <View style={styles.dashinfocontainer}>
          <DashRectangle />
          <Text>26 Total Employees</Text>
        </View>
        <View style={styles.dashinfocontainer}>
          <DashRectangle />
          <Text>26 Total Employees</Text>
        </View>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'yellow',
        }}>
        <BalanceChart />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>MERHABA</Text>
      </View>
    </View>
  );
};

export default EarningsChart;
