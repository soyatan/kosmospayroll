import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import AttendanceItem from '../AttendanceItem/AttendanceItem';
import DateContainer from '../DateContainer/DateContainer';
import styles from './styles';
import {employeesSelector} from './../../redux/employeesReducer';
import {convertDateYMD} from '../../API/dbfunctions';
const AttendanceScreen = ({navigation}) => {
  const [curDate, setcurDate] = useState(new Date());
  const employees = useSelector(employeesSelector);

  return (
    <View style={styles.container}>
      <DateContainer curDate={curDate} setcurDate={setcurDate} />
      <View style={styles.attendancecontainer}>
        <FlatList
          data={employees}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => {
            return <AttendanceItem employee={item} curDate={curDate} />;
          }}
        />
      </View>
    </View>
  );
};

export default AttendanceScreen;
