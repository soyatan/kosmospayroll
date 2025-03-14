import React, {useState, useEffect} from 'react';
import {View, SectionList} from 'react-native';
import {useSelector} from 'react-redux';
import AttendanceItem from '../AttendanceItem/AttendanceItem';
import DateContainer from '../DateContainer/DateContainer';
import styles from './styles';
import {employeesSelector} from './../../redux/employeesReducer';
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
            showsVerticalScrollIndicator={false}
            sections={employees}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => {
              return <AttendanceItem employee={item} curDate={curDate} />;
            }}
            renderSectionHeader={({section: {title, data}}) => (
              <Title title={title} quantity={data.length} />
            )}
          />
        ) : null}
      </View>
    </View>
  );
};

export default AttendanceScreen;
