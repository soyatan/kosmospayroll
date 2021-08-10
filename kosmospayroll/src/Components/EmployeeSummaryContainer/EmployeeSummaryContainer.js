import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {calculateTotalEarnings, converDateUTC} from '../../API/dbfunctions';
import {formatCurrency} from '../../API/Helper';
import {TouchableIcon} from '../../Assets/Svgs/touchableIcon';
import ButtonWithText from '../Shared/Button/ButtonWithText';
import styles from './styles';
const EmployeeSummaryContainer = ({employee, navigation}) => {
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Employee', {employee});
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
              {formatCurrency(
                calculateTotalEarnings(employee).normalpay +
                  calculateTotalEarnings(employee).overtimepay,
                employee.currency,
              )}
            </Text>
          </View>
          <View style={styles.rightinsidecontainer}>
            <Text style={styles.blacktext}>Total Paid </Text>
            <Text style={styles.blackboldtext}>
              {formatCurrency(employee.rate, employee.currency)}
            </Text>
          </View>
          <View style={styles.rightinsidecontainer}>
            <Text style={styles.blacktext}>Balance </Text>
            <Text style={styles.blackboldtext}>
              {formatCurrency(
                calculateTotalEarnings(employee).normalpay +
                  calculateTotalEarnings(employee).overtimepay -
                  employee.rate,
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
