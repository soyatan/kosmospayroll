import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import PendingContainer from '../PendingContainer/PendingContainer';
import styles from './styles';

import PendingContainerEmp from './../PendingContainer/PendingContainerEmp';
import {formatCurrency} from '../../API/Helper';
import {calculateTotalEarnings} from '../../API/dbfunctions';
import PaymentOptionsContainer from '../PaymentOptionsContainer/PaymentOptionsContainer';
import {
  employeeNameSelector,
  setEmpChosen,
} from './../../redux/employeeNameReducer';
import {useDispatch, useSelector} from 'react-redux';
import EmployeePayInfoContainer from './EmployeePayInfoContainer';

const EmployeeScreen = ({navigation, route}) => {
  const [totalPending, settotalPending] = useState(0);
  const dispatch = useDispatch();
  const selectedEmployee = useSelector(employeeNameSelector);

  useEffect(() => {
    try {
      const {employee} = route.params;
      dispatch(setEmpChosen(employee));
      const pending = formatCurrency(
        calculateTotalEarnings(employee).normalpay +
          calculateTotalEarnings(employee).overtimepay -
          employee.rate,
        employee.currency,
      );
      settotalPending(pending);
    } catch (error) {
      settotalPending(0);
    }
  }, [route]);

  return (
    <View style={styles.container}>
      <PendingContainerEmp
        onPress={() => console.log('hy')}
        totalPending={totalPending}
      />
      <View style={styles.rostercontainer}>
        <PaymentOptionsContainer />
        <EmployeePayInfoContainer employee={selectedEmployee} />
      </View>
    </View>
  );
};

export default EmployeeScreen;
