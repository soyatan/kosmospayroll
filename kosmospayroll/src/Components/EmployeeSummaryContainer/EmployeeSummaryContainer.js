import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {TouchableIcon} from '../../Assets/Svgs/touchableIcon';
import ButtonWithText from '../Shared/Button/ButtonWithText';
import styles from './styles';
const EmployeeSummaryContainer = ({employee}) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.leftcontainer}>
          <Text style={styles.whitetext}>{employee.name}</Text>
          <Text style={styles.whitetext}>{employee.designation}</Text>
        </View>
        <View style={styles.rightcontainer}>
          <Text style={styles.whitetext}>Monthly</Text>
          <Text style={styles.whitetext}>Monthly</Text>
        </View>
      </View>
    </>
  );
};

export default EmployeeSummaryContainer;
