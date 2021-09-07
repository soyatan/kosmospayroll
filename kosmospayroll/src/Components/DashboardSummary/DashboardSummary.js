import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import {countActiveEmployees, fetchEmployees} from '../../API/dbfunctions';
import {EmployeeChart} from '../Charts/EmployeeChart';
import DashRectangle from '../DashRectangle/DashRectangle';
import styles from './styles';

const DashboardSummary = ({employees}) => {
  const [chartData, setchartData] = useState([]);
  useEffect(() => {
    let headCount = countActiveEmployees(employees);
    setchartData([
      {
        name: 'Active',
        number: headCount.active,
        color: '#63bd95',
        legendFontColor: '#63bd95',
        legendFontSize: 12,
      },
      {
        name: 'Inactive',
        number: headCount.passive,
        color: '#bd6363',
        legendFontColor: '#bd6363',
        legendFontSize: 12,
      },
    ]);
  }, [employees]);

  if (chartData.length > 0) {
    return (
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <View style={styles.dashinfocontainer}>
            <DashRectangle color={'#636dbd'} />
            <Text style={{color: '#636dbd'}}>{`${
              chartData[0].number + chartData[1].number
            } Total`}</Text>
          </View>
          <View style={styles.dashinfocontainer}>
            <DashRectangle color={'#63bd95'} />
            <Text
              style={{
                color: '#63bd95',
              }}>{`${chartData[0].number} Active`}</Text>
          </View>
          <View style={styles.dashinfocontainer}>
            <DashRectangle color={'#bd6363'} />
            <Text
              style={{
                color: '#bd6363',
              }}>{`${chartData[1].number} Inactive`}</Text>
          </View>
        </View>
        <View
          style={{
            flex: 1.5,

            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <EmployeeChart datam={chartData} />
        </View>
      </View>
    );
  } else {
    return null;
  }
};

export default DashboardSummary;
