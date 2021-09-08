import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import {
  calculateEarnings,
  calculateGlobalBalanceFormatted,
  calculateGlobalEarnings,
  calculateGlobalEarningsFormatted,
  calculateGlobalPaymentsFormatted,
  calculateTotalEarnings,
  fetchEmployees,
} from '../../API/dbfunctions';
import {BalanceChart} from '../Charts/BalanceChart';
import {EmployeeChart} from '../Charts/EmployeeChart';
import DashRectangle from '../DashRectangle/DashRectangle';
import styles from './styles';
import {
  calculateGlobalBalance,
  calculateGlobalPayments,
} from './../../API/dbfunctions';

const EarningsChart = ({employees}) => {
  const [datas, setdatas] = useState(null);

  useEffect(() => {
    const calculateDatas = emps => {
      let data = [
        {
          name: 'Earnings',
          amount: calculateGlobalEarnings(emps),
          color: '#63bd95',
          legendFontColor: '#7F7F7F',
          legendFontSize: 10,
        },
        {
          name: 'Payments',
          amount: calculateGlobalPayments(emps),
          color: '#bd6363',
          legendFontColor: '#7F7F7F',
          legendFontSize: 10,
        },
      ];
      return data;
    };

    if (employees && employees.length > 0) {
      setdatas(calculateDatas(employees));
    }
  }, [employees]);

  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <View style={styles.dashinfocontainer}>
          <DashRectangle color={'#63bd95'} />
          <View>
            <Text style={[styles.moneytext, {color: '#63bd95'}]}>
              {datas ? calculateGlobalEarningsFormatted(employees) : null}
            </Text>
            <Text style={[styles.titletext, {color: '#63bd95'}]}>
              TOTAL EARNINGS
            </Text>
          </View>
        </View>

        <View style={styles.dashinfocontainer}>
          <DashRectangle color={'#bd6363'} />
          <View>
            <Text style={[styles.moneytext, {color: '#bd6363'}]}>
              {datas ? calculateGlobalPaymentsFormatted(employees) : null}
            </Text>
            <Text style={[styles.titletext, {color: '#bd6363'}]}>
              TOTAL PAYMENTS
            </Text>
          </View>
        </View>
        <View style={styles.dashinfocontainer}>
          <DashRectangle color={'#636dbd'} />
          <View>
            <Text style={[styles.moneytext, {color: '#636dbd'}]}>
              {datas ? calculateGlobalBalanceFormatted(employees) : null}
            </Text>
            <Text style={[styles.titletext, {color: '#636dbd'}]}>
              TOTAL BALANCE
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',

          flex: 0.4,
        }}>
        {datas ? <BalanceChart data={datas} /> : null}
      </View>
    </View>
  );
};

export default EarningsChart;
