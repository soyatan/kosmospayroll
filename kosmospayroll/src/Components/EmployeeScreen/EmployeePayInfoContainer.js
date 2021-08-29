import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {TouchableIcon} from '../../Assets/Svgs/touchableIcon';
import ButtonWithText from '../Shared/Button/ButtonWithText';
import styles from './styles';
import {Icon} from '../../Assets/Svgs/icon';
import {formatCurrency, getMonthName} from '../../API/Helper';
import moment from 'moment';
import {useSelector} from 'react-redux';
import {employeeNameSelector} from './../../redux/employeeNameReducer';
import {ChartEvsP} from '../Charts/ChartEvsP';
import {
  calculateEarnings,
  calculateSplitEarnings,
  calculateMonthlyEarnings,
  calculateSplitPayments,
} from '../../API/dbfunctions';

const EmployeePayInfoContainer = ({earnings, currency, payments}) => {
  const [balances, setbalances] = useState(null);
  const [currentMonth, setcurrentMonth] = useState(new Date());
  const [prevMonth, setprevMonth] = useState(
    new Date(moment(currentMonth).subtract(1, 'months')),
  );
  const [monthlyearns, setmonthlyearns] = useState([]);
  //calculateMonthlyEarnings()

  const employee = useSelector(employeeNameSelector);
  const paymentInfo = calculateSplitPayments(employee, currentMonth);

  useEffect(() => {
    if (earnings) {
      setbalances(calculateSplitEarnings(earnings, currentMonth));
      let monthlyearnings = {
        labels: [],
        data: [],
        legend: ['normalpay', 'overtime pay'],
      };
      let np = 0;
      let otp = 0;
      if (Object.keys(earnings).length > 4) {
        monthlyearnings.labels.push('Earlier');
        monthlyearnings.data.push([0, 0]);
      }
      Object.keys(earnings).map((month, index) => {
        if (index < 4) {
          monthlyearnings.labels.push(month);
          let earns = [earnings[month].normalpay, earnings[month].overtimepay];

          monthlyearnings.data.push(earns);
        } else {
          let ind = monthlyearnings.labels.indexOf('Earlier');
          monthlyearnings.data[ind] = monthlyearnings.data[ind].map(
            (amount, amountindex) => {
              if (amountindex === 0) {
                return amount + earnings[month].normalpay;
              } else {
                return amount + earnings[month].overtimepay;
              }
            },
          );
        }
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
          {balances && paymentInfo ? (
            <Text style={styles.blacktext}>
              {formatCurrency(
                -paymentInfo.previous + balances.previous,
                currency,
              )}
            </Text>
          ) : null}
        </View>
        <View style={styles.datarowcontainer}>
          <Text style={styles.blacktext}>{`${getMonthName(
            currentMonth.getMonth(),
          )} Earnings `}</Text>
          {balances ? (
            <Text style={styles.blacktext}>
              {formatCurrency(balances.current, currency)}
            </Text>
          ) : null}
        </View>
        <View style={styles.datarowcontainer}>
          <Text style={styles.blacktext}>{`${getMonthName(
            currentMonth.getMonth(),
          )} Payments `}</Text>
          {payments ? (
            <Text style={styles.blacktext}>
              {formatCurrency(paymentInfo.current, currency)}
            </Text>
          ) : (
            <Text style={styles.blacktext}>{formatCurrency(0, currency)}</Text>
          )}
        </View>
        <View style={styles.iconcontainer}>
          <Text style={styles.whitetext}>
            {`Net Balance by ${moment(currentMonth).format('DD-MMM-YYYY')}`}
          </Text>
          {balances ? (
            <Text style={styles.whitetext}>
              {formatCurrency(balances.final - payments, currency)}
            </Text>
          ) : null}
        </View>
        <Text style={styles.whitetext}>123124</Text>
        <ChartEvsP datam={monthlyearns} currency={currency} />
      </View>
    </>
  );
};

export default EmployeePayInfoContainer;
