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
import WorkTypeFilterContainer from './../WorkTypeFilterContainer/WorkTypeFilterContainer';
import EmployeeSummaryContainer from './../EmployeeSummaryContainer/EmployeeSummaryContainer';
import {useDispatch, useSelector} from 'react-redux';
import {employeesSelector} from './../../redux/employeesReducer';
import {calculateEarnings, fetchEmployees} from '../../API/dbfunctions';
import {userSelector} from '../../redux/userReducer';
import {Title} from './Title';

const RosterScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const employees = useSelector(employeesSelector);

  const user = useSelector(userSelector);
  calculateEarnings(employees[0].data[0].attendance);
  return (
    <View style={styles.container}>
      <PendingContainer onPress={() => navigation.navigate('Add')} />
      <View style={styles.rostercontainer}>
        {employees ? (
          <SectionList
            sections={employees}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => {
              return <EmployeeSummaryContainer employee={item} />;
            }}
            renderSectionHeader={({section: {title}}) => (
              <Title title={title} />
            )}
          />
        ) : null}
      </View>
    </View>
  );
};

export default RosterScreen;
