import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import {fetchEmployees} from '../../API/dbfunctions';
import {EmployeeChart} from '../Charts/EmployeeChart';
import DashRectangle from '../DashRectangle/DashRectangle';
import styles from './styles';

const DashboardSummary = () => {
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
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <EmployeeChart />
      </View>
    </View>
  );
};

export default DashboardSummary;
