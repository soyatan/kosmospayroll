import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SectionList,
} from 'react-native';
import PendingContainer from '../PendingContainer/PendingContainer';
import styles from './styles';
import EmployeeSummaryContainer from './../EmployeeSummaryContainer/EmployeeSummaryContainer';
import {useDispatch, useSelector} from 'react-redux';
import {employeesSelector} from './../../redux/employeesReducer';
import {
  calculateEarnings,
  calculateMonthlyEarnings,
  fetchEmployees,
} from '../../API/dbfunctions';
import {userSelector} from '../../redux/userReducer';
import {Title} from './Title';

const RosterScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const employees = useSelector(employeesSelector);
  const user = useSelector(userSelector);
  console.log(employees[2].data[0].payments);
  //console.log(calculateEarnings(employees, '-MgaQDYjCzcmN2KBydsQ'));
  //console.log(employees[1].data);
  //console.log(employees[2]);
  //console.log(calculateMonthlyEarnings(employees[2].data[0]));
  return (
    <View style={styles.container}>
      <PendingContainer onPress={() => navigation.navigate('Add')} />
      <View style={styles.rostercontainer}>
        {employees ? (
          <SectionList
            sections={employees}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => {
              return (
                <EmployeeSummaryContainer
                  employee={item}
                  navigation={navigation}
                />
              );
            }}
            renderSectionHeader={({section: {title, data}}) => (
              <Title title={title} quantity={data.length} />
            )}
          />
        ) : null}
      </View>
    </View>
  );
};

export default RosterScreen;
