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
  const [monthlyearns, setmonthlyearns] = useState([]);
  //calculateMonthlyEarnings()

  const employee = useSelector(employeeNameSelector);
  //console.log(balances);

  useEffect(() => {
    if (earnings) {
      setbalances(calculateBalances(earnings, currentMonth));
      let monthlyearnings = {
        labels: [],
        data: [],
        legend: ['normalpay', 'overtime pay'],
      };

      Object.keys(earnings).map(month => {
        monthlyearnings.labels.push(month);
        let earns = [earnings[month].normalpay, earnings[month].overtimepay];

        monthlyearnings.data.push(earns);
      });
      setmonthlyearns(monthlyearnings);
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
            <Text style={styles.blacktext}>{balances.previous}</Text>
          ) : null}
        </View>
        <View style={styles.datarowcontainer}>
          <Text style={styles.blacktext}>{`${getMonthName(
            currentMonth.getMonth(),
          )} Earnings `}</Text>
          {balances ? (
            <Text style={styles.blacktext}>{balances.current}</Text>
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
        <ChartEvsP datam={monthlyearns} />
      </View>
    </>
  );
};

export default EmployeePayInfoContainer;
