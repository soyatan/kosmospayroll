import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {formatCurrency} from '../../API/Helper';
import {TouchableIcon} from '../../Assets/Svgs/touchableIcon';
import ButtonWithText from '../Shared/Button/ButtonWithText';
import styles from './styles';
const EmployeeSummaryContainer = ({employee}) => {
  console.log(employee);
  return (
    <>
      <View style={styles.container}>
        <View style={styles.leftcontainer}>
          <Text style={styles.whitetext}>{employee.name}</Text>
          <Text style={styles.whitetext}>{employee.designation}</Text>
        </View>
        <View style={styles.rightcontainer}>
          <Text style={styles.whitetext}>{employee.worktype}</Text>
          <Text style={styles.whitetext}>
            {formatCurrency(employee.rate, employee.currency)}
          </Text>
        </View>
      </View>
    </>
  );
};

export default EmployeeSummaryContainer;
