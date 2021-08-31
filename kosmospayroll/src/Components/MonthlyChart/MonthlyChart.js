import React, {useEffect, useState} from 'react';

import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import styles from './styles';
import DashRectangle from '../DashRectangle/DashRectangle';
import {EmployeeChart} from '../Charts/EmployeeChart';

const MonthlyChart = () => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
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
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <EmployeeChart />
      </View>
    </View>
  );
};

export default MonthlyChart;
