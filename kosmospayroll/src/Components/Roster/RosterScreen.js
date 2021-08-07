import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import PendingContainer from '../PendingContainer/PendingContainer';
import styles from './styles';
import WorkTypeFilterContainer from './../WorkTypeFilterContainer/WorkTypeFilterContainer';
import EmployeeSummaryContainer from './../EmployeeSummaryContainer/EmployeeSummaryContainer';
import {useDispatch, useSelector} from 'react-redux';
import {employeesSelector} from './../../redux/employeesReducer';
import {fetchEmployees} from '../../API/dbfunctions';
import {userSelector} from '../../redux/userReducer';

const RosterScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const employees = useSelector(employeesSelector);
  const user = useSelector(userSelector);
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchEmployees(dispatch, user.userid);
    });
    return unsubscribe;
  }, [navigation]);
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
