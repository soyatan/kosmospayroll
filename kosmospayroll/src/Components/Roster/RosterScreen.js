import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import PendingContainer from '../PendingContainer/PendingContainer';
import styles from './styles';
import WorkTypeFilterContainer from './../WorkTypeFilterContainer/WorkTypeFilterContainer';
import EmployeeSummaryContainer from './../EmployeeSummaryContainer/EmployeeSummaryContainer';
import {useSelector} from 'react-redux';
import {employeesSelector} from './../../redux/employeesReducer';

const RosterScreen = ({navigation}) => {
  const employees = useSelector(employeesSelector);
  return (
    <View style={styles.container}>
      <PendingContainer onPress={() => navigation.navigate('Add')} />
      <View style={styles.rostercontainer}>
        <WorkTypeFilterContainer />
        <FlatList
          data={employees}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => {
            return <EmployeeSummaryContainer employee={item} />;
          }}
        />
      </View>
    </View>
  );
};

export default RosterScreen;
