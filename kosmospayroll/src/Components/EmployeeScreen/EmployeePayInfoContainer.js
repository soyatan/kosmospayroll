import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {TouchableIcon} from '../../Assets/Svgs/touchableIcon';
import ButtonWithText from '../Shared/Button/ButtonWithText';
import styles from './styles';
import {Icon} from '../../Assets/Svgs/icon';
import {getMonthName} from '../../API/Helper';
import moment from 'moment';
const EmployeePayInfoContainer = ({employee}) => {
  const [currentMonth, setcurrentMonth] = useState(new Date());
  console.log(moment(currentMonth).add(2, 'months'));
  return (
    <>
      <View style={styles.paycontainer}>
        <View style={styles.iconcontainer}>
          <Text style={styles.pinktext}>Payments</Text>
        </View>
        <View style={styles.iconcontainer}>
          <Text style={styles.pinktext}>{employee.name}</Text>
        </View>
        <View style={styles.iconcontainer}>
          <Text style={styles.pinktext}>Deductions</Text>
        </View>
      </View>
    </>
  );
};

export default EmployeePayInfoContainer;
