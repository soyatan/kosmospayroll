import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  calculateMonthlyEarnings,
  calculateSplitEarnings,
  calculateTotalEarnings,
  calculateTotalPayments,
  converDateUTC,
} from '../../API/dbfunctions';
import {formatCurrency} from '../../API/Helper';
import {TouchableIcon} from '../../Assets/Svgs/touchableIcon';
import ButtonWithText from '../Shared/Button/ButtonWithText';
import styles from './styles';
const EmployeeSummaryContainer = ({employee, navigation}) => {
  const earnings = calculateSplitEarnings(calculateMonthlyEarnings(employee));

  return (
    <>
      <TouchableOpacity
        elevation={5}
        onPress={() => {
          navigation.navigate('Employee', {
            employee,
          });
        }}
        style={styles.container}>
        <View style={styles.leftcontainer}>
          <Text style={styles.blackboldtext}>{employee.name}</Text>
          <Text style={styles.blacktext}>{employee.designation}</Text>
        </View>
        <View style={styles.rightcontainer}>
          <View style={styles.rightinsidecontainer}>
            <Text style={styles.blacktext}>Total Earnings </Text>
            <Text style={styles.blackboldtext}>
              {formatCurrency(earnings.final, employee.currency)}
            </Text>
          </View>
          <View style={styles.rightinsidecontainer}>
            <Text style={styles.blacktext}>Total Paid </Text>
            <Text style={styles.blackboldtext}>
              {formatCurrency(
                calculateTotalPayments(employee),
                employee.currency,
              )}
            </Text>
          </View>
          <View style={styles.rightinsidecontainer}>
            <Text style={styles.blacktext}>Balance </Text>
            <Text style={styles.blackboldtext}>
              {formatCurrency(
                calculateTotalEarnings(employee).normalpay +
                  calculateTotalEarnings(employee).overtimepay -
                  calculateTotalPayments(employee),
                employee.currency,
              )}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default EmployeeSummaryContainer;
