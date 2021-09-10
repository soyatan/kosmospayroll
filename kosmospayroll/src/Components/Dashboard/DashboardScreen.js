import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import {fetchEmployees} from '../../API/dbfunctions';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {userSelector} from '../../redux/userReducer';
import {loadingSelector, setLoading} from '../../redux/loadingReducer';
import {employeesSelector} from '../../redux/employeesReducer';
import DashboardSummary from './../DashboardSummary/DashboardSummary';
import EarningsChart from '../EarningsChart/EarningsChart';
import WeeklyChart from '../WeeklyChart/WeeklyChart';
import MonthlyChart from '../MonthlyChart/MonthlyChart';

const DashboardScreen = ({navigation}) => {
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      //fetchEmployees(dispatch, user.userid);
    });
    return unsubscribe;
  }, [navigation]);

  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  const isloading = useSelector(loadingSelector);
  const employees = useSelector(employeesSelector);
  useEffect(() => {
    dispatch(setLoading(true));
    fetchEmployees(dispatch, user.userid);
  }, []);
  return (
    <ScrollView style={styles.container}>
      {employees && employees.length > 0 ? (
        <View style={styles.welcometextcontainer}>
          <Text style={styles.blacktext}>EMPLOYEES</Text>
          <DashboardSummary employees={employees} />
          <Text style={styles.blacktext}>OVERALL BALANCE</Text>
          <EarningsChart employees={employees} />
          <Text style={styles.blacktext}>
            WEEKLY OVERVIEW (<Text style={{color: '#8cc79c'}}>PRESENT</Text>/
            <Text style={{color: '#be8cc7'}}> HALF</Text>/
            <Text style={{color: '#71717F'}}> ABSENT</Text>)
          </Text>
          <WeeklyChart employees={employees} />
          <Text style={styles.blacktext}>MONTHLY TRENDS</Text>
          <MonthlyChart employees={employees} />
        </View>
      ) : null}
    </ScrollView>
  );
};

export default DashboardScreen;
