import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {TouchableIcon} from '../../Assets/Svgs/touchableIcon';
import ButtonWithText from '../Shared/Button/ButtonWithText';
import styles from './styles';
import {Icon} from '../../Assets/Svgs/icon';
import {getMonthName} from '../../API/Helper';
import moment from 'moment';
import {useSelector} from 'react-redux';
import {employeeNameSelector} from './../../redux/employeeNameReducer';
import {ChartEvsP} from '../Charts/ChartEvsP';
import {
  calculateBalances,
  calculateMonthlyEarnings,
} from '../../API/dbfunctions';
const EmployeePayInfoContainer = ({earnings}) => {
  const [balances, setbalances] = useState(null);
  const [currentMonth, setcurrentMonth] = useState(new Date());
  const [prevMonth, setprevMonth] = useState(
    new Date(moment(currentMonth).subtract(1, 'months')),
  );
  //calculateMonthlyEarnings()
  console.log(earnings);
  const employee = useSelector(employeeNameSelector);

  useEffect(() => {
    if (earnings) {
      setbalances(calculateBalances(earnings, currentMonth));
    }
  }, [earnings]);

  return (
    <>
      <View style={styles.paycontainer}>
        <View style={styles.datarowcontainer}>
          <Text style={styles.blacktext}>
            {`${getMonthName(prevMonth.getMonth())} Final Balance `}
          </Text>
          {balances ? (
            <Text style={styles.blacktext}>{balances.final}</Text>
          ) : null}
        </View>
        <View style={styles.datarowcontainer}>
          <Text style={styles.blacktext}>{`${getMonthName(
            currentMonth.getMonth(),
          )} Earnings `}</Text>
          {balances ? (
            <Text style={styles.blacktext}>{balances.final}</Text>
          ) : null}
        </View>
        <View style={styles.datarowcontainer}>
          <Text style={styles.blacktext}>{`${getMonthName(
            currentMonth.getMonth(),
          )} Payments `}</Text>
          {balances ? (
            <Text style={styles.blacktext}>{balances.final}</Text>
          ) : null}
        </View>
        <View style={styles.iconcontainer}>
          <Text style={styles.whitetext}>
            {`Net Balance by ${moment(currentMonth).format('DD-MMM-YYYY')}`}
          </Text>
          {balances ? (
            <Text style={styles.whitetext}>{balances.final}</Text>
          ) : null}
        </View>
        <Text style={styles.whitetext}>123124</Text>
        <ChartEvsP />
      </View>
    </>
  );
};

export default EmployeePayInfoContainer;
