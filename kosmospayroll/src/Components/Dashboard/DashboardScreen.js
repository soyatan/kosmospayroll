import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import {fetchEmployees} from '../../API/dbfunctions';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {userSelector} from '../../redux/userReducer';
import {loadingSelector, setLoading} from '../../redux/loadingReducer';
import {employeesSelector} from '../../redux/employeesReducer';

const DashboardScreen = ({navigation}) => {
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      //fetchEmployees(dispatch, user.userid);
      console.log('WHOS THERE');
    });
    return unsubscribe;
  }, [navigation]);
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  const isloading = useSelector(loadingSelector);
  const employees = useSelector(employeesSelector);
  console.log(employees);
  useEffect(() => {
    dispatch(setLoading(true));
    fetchEmployees(dispatch, user.userid);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.headeradditioncontainer}>
        {isloading ? (
          <>
            <View style={{}}>
              <ActivityIndicator size="small" color="white" />
            </View>
          </>
        ) : null}
      </View>
      {employees ? (
        <View style={styles.welcometextcontainer}>
          <Text>aa</Text>
          <Text></Text>
        </View>
      ) : null}
    </View>
  );
};

export default DashboardScreen;
