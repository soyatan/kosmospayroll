import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import PendingContainer from '../PendingContainer/PendingContainer';
import styles from './styles';

import PendingContainerEmp from './../PendingContainer/PendingContainerEmp';
import {formatCurrency} from '../../API/Helper';
import {
  calculateMonthlyEarnings,
  calculateTotalEarnings,
} from '../../API/dbfunctions';
import PaymentOptionsContainer from '../PaymentOptionsContainer/PaymentOptionsContainer';
import {
  employeeNameSelector,
  setEmpChosen,
} from './../../redux/employeeNameReducer';
import {useDispatch, useSelector} from 'react-redux';
import EmployeePayInfoContainer from './EmployeePayInfoContainer';

const EmployeeScreen = ({navigation, route}) => {
  const [totalPending, settotalPending] = useState(0);
  const [monthlyEarnings, setmonthlyEarnings] = useState(null);

  const dispatch = useDispatch();
  //console.log(selectedEmployee);
  const {employee} = route.params;
  useEffect(() => {
    try {
      dispatch(setEmpChosen(employee));
      const pending = formatCurrency(
        calculateTotalEarnings(employee).normalpay +
          calculateTotalEarnings(employee).overtimepay -
          employee.rate * employee.currency,
      );

      settotalPending(pending);
    } catch (error) {
      settotalPending(0);
    }
    setmonthlyEarnings(calculateMonthlyEarnings(employee));
  }, [route]);

  return (
    <View style={styles.container}>
      <PendingContainerEmp
        onPress={() => navigation.navigate('Payment', {employee})}
        totalPending={totalPending}
      />
      <View style={styles.rostercontainer}>
        <PaymentOptionsContainer />
        <EmployeePayInfoContainer earnings={monthlyEarnings} />
      </View>
    </View>
  );
};

export default EmployeeScreen;
