import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SectionList,
} from 'react-native';
import {useSelector} from 'react-redux';
import AttendanceItem from '../AttendanceItem/AttendanceItem';
import DateContainer from '../DateContainer/DateContainer';
import styles from './styles';
import {employeesSelector} from './../../redux/employeesReducer';
import {convertDateYMD} from '../../API/dbfunctions';
import {Title} from '../Roster/Title';
const AttendanceScreen = ({navigation}) => {
  const [curDate, setcurDate] = useState(new Date());
  const employees = useSelector(employeesSelector);

  return (
    <View style={styles.container}>
      <DateContainer curDate={curDate} setcurDate={setcurDate} />
      <View style={styles.attendancecontainer}>
        {employees.length > 1 ? (
          <SectionList
            //data={employees}
            sections={employees}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => {
              return <AttendanceItem employee={item} curDate={curDate} />;
            }}
            renderSectionHeader={({section: {title}}) => (
              <Title title={title} />
            )}
          />
        ) : null}
      </View>
    </View>
  );
};

export default AttendanceScreen;
