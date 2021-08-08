import React, {useEffect, useRef, useState} from 'react';
import {View, Text, TouchableOpacity, BackHandler} from 'react-native';
import {TouchableIcon} from '../../Assets/Svgs/touchableIcon';
import ButtonWithText from '../Shared/Button/ButtonWithText';
import styles from './styles';
import AttendanceOption from './AttendanceOption';
import {Icon} from '../../Assets/Svgs/icon';
import {markAttendance, saveOtHours} from './../../API/dbfunctions';
import moment from 'moment';
import {useDispatch} from 'react-redux';
import {Picker} from '@react-native-picker/picker';
import {currencies} from '../../API/currencies';
import {hours} from './../../API/hours';

const AttendanceItem = ({employee, curDate}) => {
  const dispatch = useDispatch();

  const [absence, setabsence] = useState(null);
  const [otHours, setotHours] = useState(0);
  const [workHours, setworkHours] = useState(0);
  const [workday, setworkday] = useState('None');

  useEffect(() => {
    if (employee.attendance) {
      const curDateFormatted = moment(curDate).format('YYYY-MM-DD');
      if (employee.attendance[curDateFormatted]) {
        setabsence(employee.attendance[curDateFormatted].status);
        if (employee.attendance[curDateFormatted].workhours) {
          setworkHours(employee.attendance[curDateFormatted].workhours);
        }
        if (employee.attendance[curDateFormatted].workday) {
          setworkday(employee.attendance[curDateFormatted].workday);
        }
        if (employee.attendance[curDateFormatted].othours) {
          setotHours(employee.attendance[curDateFormatted].othours);
        }
      } else setabsence(null);
    } else setabsence(null);
  }, [curDate, employee]);

  useEffect(() => {
    if (employee.attendance) {
      const curDateFormatted = moment(curDate).format('YYYY-MM-DD');
      if (employee.attendance[curDateFormatted]) {
        setabsence(employee.attendance[curDateFormatted].status);
        if (employee.attendance[curDateFormatted].workhours) {
          setworkHours(employee.attendance[curDateFormatted].workhours);
        }
        if (employee.attendance[curDateFormatted].workday) {
          setworkday(employee.attendance[curDateFormatted].workday);
        }
        if (employee.attendance[curDateFormatted].othours) {
          setotHours(employee.attendance[curDateFormatted].othours);
        }
      } else {
        setabsence(null);
        setotHours(0);
        setworkday('None');
        setworkHours(0);
      }
    } else setabsence(null);
  }, [curDate, employee]);

  const _onPress = status => {
    if (employee.worktype === 'daily') {
      if (status === 2) {
        setworkday('Full');
      } else if (status === 1) {
        setworkday('Half');
      } else {
        setworkday('None');
      }
    }
    markAttendance(
      employee.userid,
      employee.key,
      employee.worktype,
      moment(curDate).format('YYYY-MM-DD'),
      status,
      dispatch,
    );
  };

  const _saveOtHours = hours => {
    setotHours(hours);
    saveOtHours(
      employee.userid,
      employee.key,
      employee.worktype,
      moment(curDate).format('YYYY-MM-DD'),
      hours,
      dispatch,
    );
  };

  const pickerRef = useRef();
  const pickerRefWork = useRef();
  return (
    <>
      <View style={styles.container}>
        <View style={styles.leftcontainer}>
          <Text style={styles.blacktext}>{employee.name}</Text>
          <View style={{flexDirection: 'row'}}>
            <AttendanceOption
              title={'Present'}
              color={absence == 2 ? 'green' : 'white'}
              textcolor={absence == 2 ? 'white' : 'gray'}
              onPress={() => _onPress(2)}
            />
            <AttendanceOption
              title={'Half Day'}
              color={absence == 1 ? 'yellow' : 'white'}
              textcolor={absence == 1 ? 'black' : 'gray'}
              onPress={() => _onPress(1)}
            />
            <AttendanceOption
              title={'Absent'}
              color={absence == 0 ? 'red' : 'white'}
              textcolor={absence == 0 ? 'white' : 'gray'}
              onPress={() => _onPress(0)}
            />
          </View>
        </View>
        <Picker
          value={otHours}
          style={{
            width: 0,
            height: 0,
            backgroundColor: 'white',
            position: 'absolute',
          }}
          ref={pickerRef}
          selectedValue={otHours}
          onValueChange={(itemValue, itemIndex) => _saveOtHours(itemValue)}>
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
          value={workHours}
          style={{
            width: 0,
            height: 0,
            backgroundColor: 'white',
            position: 'absolute',
          }}
          ref={pickerRefWork}
          selectedValue={workHours}
          onValueChange={(itemValue, itemIndex) => setworkHours(itemValue)}>
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
            <TouchableOpacity
              style={[styles.clockcontainer, {borderBottomWidth: 0.3}]}
              onPress={() => pickerRefWork.current.focus()}>
              <Icon name={'clock'} scale={1} />
              <Text style={styles.blacktext}>{workHours.toFixed(2)}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.clockcontainer}
              onPress={() => pickerRef.current.focus()}>
              <Icon name={'hourglass'} scale={1} />
              <Text style={styles.blacktext}>{otHours.toFixed(2)}</Text>
            </TouchableOpacity>
          </View>
        ) : employee.worktype === 'daily' ? (
          <View style={styles.rightcontainer}>
            <View style={[styles.clockcontainer, {borderBottomWidth: 0.3}]}>
              <Icon name={'clock'} scale={1} />
              <Text style={styles.blacktext}>{workday}</Text>
            </View>

            <TouchableOpacity
              style={styles.clockcontainer}
              onPress={() => pickerRef.current.focus()}>
              <Icon name={'hourglass'} scale={1} />
              <Text style={styles.smallblacktext}>{otHours.toFixed(2)}</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.rightcontainer}>
            <View style={[styles.clockcontainer]}>
              <Icon name={'calendar'} scale={1} />
              <Text style={styles.blacktext}>Monthly</Text>
            </View>
          </View>
        )}
      </View>
    </>
  );
};

export default AttendanceItem;
