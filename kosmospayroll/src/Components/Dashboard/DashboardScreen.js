import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import {fetchEmployees} from '../../API/dbfunctions';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {userSelector} from '../../redux/userReducer';
import {loadingSelector, setLoading} from '../../redux/loadingReducer';
import {employeesSelector} from '../../redux/employeesReducer';

const DashboardScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  const isloading = useSelector(loadingSelector);
  const employees = useSelector(employeesSelector);
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
      {!isloading ? (
        <View style={styles.welcometextcontainer}>
          <Text>{employees[0].name}</Text>
          <Text>{employees[1].name}</Text>
        </View>
      ) : null}
    </View>
  );
};

export default DashboardScreen;
