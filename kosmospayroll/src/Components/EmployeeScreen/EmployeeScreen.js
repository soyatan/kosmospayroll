import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import PendingContainer from '../PendingContainer/PendingContainer';
import styles from './styles';
import WorkTypeFilterContainer from '../WorkTypeFilterContainer/WorkTypeFilterContainer';
import EmployeeSummaryContainer from '../EmployeeSummaryContainer/EmployeeSummaryContainer';

const EmployeeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <PendingContainer />
      <View style={styles.rostercontainer}>
        <WorkTypeFilterContainer />
        <EmployeeSummaryContainer />
      </View>
    </View>
  );
};

export default EmployeeScreen;
