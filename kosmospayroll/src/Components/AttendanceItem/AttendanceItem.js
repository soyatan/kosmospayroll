import React, {useEffect, useRef, useState} from 'react';
import {View, Text, TouchableOpacity, BackHandler} from 'react-native';
import {TouchableIcon} from '../../Assets/Svgs/touchableIcon';
import ButtonWithText from '../Shared/Button/ButtonWithText';
import styles from './styles';
import AttendanceOption from './AttendanceOption';
import {Icon} from '../../Assets/Svgs/icon';
import {
  changeAttendance,
  markAttendance,
  saveOtHours,
} from './../../API/dbfunctions';
import moment from 'moment';
import {useDispatch, useSelector} from 'react-redux';
import {Picker} from '@react-native-picker/picker';
import {currencies} from '../../API/currencies';
import {hours} from './../../API/hours';
import {userSelector} from '../../redux/userReducer';

const AttendanceItem = ({employee, curDate}) => {
  const user = useSelector(userSelector);
  console.log(user);
  const dispatch = useDispatch();
  const [curDateFormatted, setCurDateFormatted] = useState(
    moment(new Date()).format('YYYY-MM-DD'),
  );

  const [attendance, setattendance] = useState({
    status: null,
    workhours: 0,
    othours: 0,
    workday: 'None',
  });
  const _changeAttendance = att => {
    const normalpay = employee.rate * att.workhours;
    const overtimepay = employee.otrate * att.othours || 0;

    if (employee.attendance && employee.attendance[curDateFormatted]) {
      const mergedAttendance = {
        ...employee.attendance[curDateFormatted],
        ...att,
      };
      changeAttendance(
        employee.userid,
        employee.key,
        employee.worktype,
        moment(curDate).format('YYYY-MM-DD'),
        mergedAttendance,
        normalpay,
        overtimepay,
        dispatch,
      );
    } else {
      changeAttendance(
        employee.userid,
        employee.key,
        employee.worktype,
        moment(curDate).format('YYYY-MM-DD'),
        att,
        normalpay,
        overtimepay,
        dispatch,
      );
    }
  };

  useEffect(() => {
    const formattedCurDate = moment(curDate).format('YYYY-MM-DD');
    if (employee.attendance) {
      if (employee.attendance[formattedCurDate]) {
        setattendance(employee.attendance[formattedCurDate]);
      } else {
        setattendance({
          status: null,
          workhours: 0,
          othours: 0,
          workday: 'None',
        });
      }
    } else
      setattendance({
        status: null,
        workhours: 0,
        othours: 0,
        workday: 'None',
      });
  }, [curDate, employee]);

  const _onPress = status => {
    if (status === 2) {
      _changeAttendance({
        status: 2,
        workday: 'Full',
        othours: 0,
        workhours: user.workhours,
      });
    } else if (status === 1) {
      _changeAttendance({
        status: 1,
        workday: 'Half',
        othours: 0,
        workhours: 0.5 * user.workhours,
      });
    } else {
      _changeAttendance({
        status: 0,
        workday: 'None',
        workhours: 0,
        othours: 0,
      });
    }
  };

  const pickerRef = useRef();
  const pickerRefWork = useRef();
  console.log(attendance);
  return (
    <>
      <View style={styles.container}>
        <View style={styles.leftcontainer}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.blacktext}>{employee.name}</Text>
            <Text style={styles.smallpinktext}>{employee.designation}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <AttendanceOption
              title={'Present'}
              color={attendance.status == 2 ? 'green' : 'white'}
              textcolor={attendance.status == 2 ? 'white' : 'gray'}
              onPress={() => _onPress(2)}
            />
            <AttendanceOption
              title={'Half Day'}
              color={attendance.status == 1 ? 'yellow' : 'white'}
              textcolor={attendance.status == 1 ? 'black' : 'gray'}
              onPress={() => _onPress(1)}
            />
            <AttendanceOption
              title={'Absent'}
              color={attendance.status == 0 ? 'red' : 'white'}
              textcolor={attendance.status == 0 ? 'white' : 'gray'}
              onPress={() => _onPress(0)}
            />
          </View>
        </View>
        <Picker
          value={attendance.othours}
          style={{
            width: 0,
            height: 0,
            backgroundColor: 'white',
            position: 'absolute',
          }}
          ref={pickerRef}
          selectedValue={attendance.othours}
          onValueChange={(itemValue, itemIndex) =>
            _changeAttendance({
              status: 2,
              workday: 'Full',
              workhours: user.workhours,
              othours: itemValue,
            })
          }>
          {hours.map((item, index) => {
            return (
              <Picker.Item
                label={item.toString()}
                value={item}
                key={index.toString()}
                style={styles.pickeritem}
              />
            );
          })}
        </Picker>
        <Picker
          value={attendance.workhours}
          style={{
            width: 0,
            height: 0,
            backgroundColor: 'white',
            position: 'absolute',
          }}
          ref={pickerRefWork}
          selectedValue={attendance.workhours}
          onValueChange={(itemValue, itemIndex) =>
            _changeAttendance({
              status: 2,
              workhours: itemValue,
            })
          }>
          {hours.map((item, index) => {
            return (
              <Picker.Item
                label={item.toString()}
                value={item}
                key={index.toString()}
                style={styles.pickeritem}
              />
            );
          })}
        </Picker>
        {employee.worktype === 'hourly' ? (
          <View style={styles.rightcontainer}>
            <View style={styles.notecontainer}>
              <Text style={styles.blacktextnote}>Work hours</Text>
            </View>
            <TouchableOpacity
              style={[styles.clockcontainer, {borderBottomWidth: 0.3}]}
              onPress={() => pickerRefWork.current.focus()}>
              <Icon name={'clock'} scale={0.8} />
              <Text style={styles.blacktext}>
                {attendance.workhours.toFixed(2)}
              </Text>
            </TouchableOpacity>
            <View style={styles.notecontainer}>
              <Text style={styles.blacktextnote}>Overtime</Text>
            </View>
            <TouchableOpacity
              style={styles.clockcontainer}
              onPress={() => pickerRef.current.focus()}>
              <Icon name={'hourglass'} scale={0.8} />
              <Text style={styles.blacktext}>
                {attendance.othours.toFixed(2)}
              </Text>
            </TouchableOpacity>
          </View>
        ) : employee.worktype === 'daily' ? (
          <View style={styles.rightcontainer}>
            <View style={styles.notecontainer}>
              <Text style={styles.blacktextnote}>Work day</Text>
            </View>
            <View style={[styles.clockcontainer, {borderBottomWidth: 0.6}]}>
              <Icon name={'clock'} scale={0.8} />
              <Text style={styles.blacktext}>{attendance.workday}</Text>
            </View>
            <View style={styles.notecontainer}>
              <Text style={styles.blacktextnote}>Overtime</Text>
            </View>
            <TouchableOpacity
              style={styles.clockcontainer}
              onPress={() => pickerRef.current.focus()}>
              <Icon name={'hourglass'} scale={0.8} />
              <Text style={styles.blacktext}>
                {attendance.othours.toFixed(2)}
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.rightcontainer}>
            <View style={[styles.clockcontainer]}>
              <Icon name={'calendar'} scale={0.8} />
              <Text style={styles.blacktext}>{` Monthly`}</Text>
            </View>
          </View>
        )}
      </View>
    </>
  );
};

export default AttendanceItem;
