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
  calculateGlobalBalance,
  calculateGlobalBalanceFormatted,
  calculateMonthlyEarnings,
  fetchEmployees,
} from '../../API/dbfunctions';
import {userSelector} from '../../redux/userReducer';
import {Title} from './Title';

const RosterScreen = ({navigation}) => {
  const [isLoading, setisLoading] = useState(true);
  const [globalBalance, setglobalBalance] = useState(0);
  const dispatch = useDispatch();
  const employees = useSelector(employeesSelector);
  const user = useSelector(userSelector);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchEmployees(dispatch, user.userid);
    });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    if (employees) {
      setglobalBalance(calculateGlobalBalanceFormatted(employees));
    }
  }, [employees]);

  return (
    <View style={styles.container}>
      <PendingContainer
        onPress={() => navigation.navigate('Add')}
        isLoading={isLoading}
        globalBalance={globalBalance}
      />
      <View style={styles.rostercontainer}>
        {employees ? (
          <SectionList
            showsVerticalScrollIndicator={false}
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
