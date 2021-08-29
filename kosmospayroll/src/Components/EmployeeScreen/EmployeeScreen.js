import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import PendingContainer from '../PendingContainer/PendingContainer';
import styles from './styles';

import PendingContainerEmp from './../PendingContainer/PendingContainerEmp';
import {formatCurrency} from '../../API/Helper';
import {
  calculateMonthlyEarnings,
  calculateTotalEarnings,
  calculateTotalPayments,
  fetchEmployees,
} from '../../API/dbfunctions';
import PaymentOptionsContainer from '../PaymentOptionsContainer/PaymentOptionsContainer';
import {
  employeeNameSelector,
  setEmpChosen,
} from './../../redux/employeeNameReducer';
import {useDispatch, useSelector} from 'react-redux';
import EmployeePayInfoContainer from './EmployeePayInfoContainer';
import {calculateSplitPayments} from './../../API/dbfunctions';
import {employeesSelector} from './../../redux/employeesReducer';
import {userSelector} from '../../redux/userReducer';

const EmployeeScreen = ({navigation, route}) => {
  const [totalPending, settotalPending] = useState(0);
  const [monthlyEarnings, setmonthlyEarnings] = useState(null);

  const dispatch = useDispatch();

  const {employee} = route.params;
  const empchosen = useSelector(employeeNameSelector);
  const user = useSelector(userSelector);
  //console.log(empchosen);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchEmployees(dispatch, user.userid);
    });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    dispatch(setEmpChosen(route.params.employee));
  }, [route]);

  useEffect(() => {
    if (empchosen) {
      try {
        const pending = formatCurrency(
          calculateTotalEarnings(empchosen).normalpay +
            calculateTotalEarnings(empchosen).overtimepay -
            calculateTotalPayments(empchosen),
          empchosen.currency,
        );

        settotalPending(pending);
      } catch (error) {
        settotalPending(0);
      }
      setmonthlyEarnings(calculateMonthlyEarnings(empchosen));
    }
  }, [empchosen]);

  return (
    <View style={styles.container}>
      <PendingContainerEmp
        onPress={() => navigation.navigate('Payment')}
        totalPending={totalPending}
      />
      <View style={styles.rostercontainer}>
        <PaymentOptionsContainer />
        <EmployeePayInfoContainer
          earnings={monthlyEarnings}
          currency={employee.currency}
          payments={calculateTotalPayments(employee) || 0}
        />
      </View>
    </View>
  );
};

export default EmployeeScreen;
