import auth, {firebase} from '@react-native-firebase/auth';

import {setError, setUserAndError, signOutAction} from '../redux/userReducer';
import database from '@react-native-firebase/database';
import {
  changeAbsence,
  changeAttendanceAction,
  setEmployees,
} from '../redux/employeesReducer';
import {setLoading} from '../redux/loadingReducer';
import moment from 'moment';
import {changeOtHours} from './../redux/employeesReducer';
export const addEmployee = (
  name,
  birthdate,
  email,
  mobilenumber,
  designation,
  joindate,
  worktype,
  isactive,
  rate,
  otrate,
  userid,
  currency,
  navigation,
) => {
  let employee = {};
  employee.name = name;
  employee.email = email.toLowerCase();
  employee.birthdate = birthdate;
  employee.mobilenumber = mobilenumber;
  employee.designation = designation;
  employee.joindate = joindate ?? new Date();
  employee.isactive = isactive;
  employee.worktype = worktype;
  employee.rate = rate;
  employee.otrate = otrate;
  employee.userid = userid;
  employee.attendance = {};
  employee.currency = currency;

  database()
    .ref('employees/' + userid)
    .push(employee)
    .then(() => navigation.navigate('Roster'))
    .catch(error => {
      console.log(error);
    });
};

export const addCurrency = (dispatch, currency, company, workhours, userid) => {
  database()
    .ref('users/' + userid)
    .update({
      currency: currency,
      company: company,
      workhours: workhours,
    })
    .then(() => {
      database()
        .ref('users/' + userid)
        .once('value')
        .then(function (snapshot) {
          let newAccount = snapshot.val();
          dispatch(
            setUserAndError(
              newAccount.username,
              newAccount.uid,
              newAccount.email,
              newAccount.currency,
              newAccount.company,
              newAccount.workhours,
              null,
              'firebase',
            ),
          );
        });
    })
    .catch(error => {
      console.log(error);
    });
};
export const fetchEmployees = async (dispatch, userid) => {
  const empList = await database()
    .ref('employees/' + userid)
    .once('value')
    .then(function (snapshot) {
      let employeeeList = [
        {title: 'Monthly', data: []},
        {title: 'Daily', data: []},
        {title: 'Hourly', data: []},
      ];
      let employees = snapshot.val();
      for (const key in employees) {
        let data = [];
        data.push();
        if (employees[key].worktype === 'monthly') {
          employeeeList.map(item => {
            if (item.title === 'Monthly') {
              item.data.push({key: key, ...employees[key]});
            }
          });
        } else if (employees[key].worktype === 'daily') {
          employeeeList.map(item => {
            if (item.title === 'Daily') {
              item.data.push({key: key, ...employees[key]});
            }
          });
        }
        if (employees[key].worktype === 'hourly') {
          employeeeList.map(item => {
            if (item.title === 'Hourly') {
              item.data.push({key: key, ...employees[key]});
            }
          });
        }
      }
      return employeeeList;
    });
  dispatch(setEmployees(empList));
  dispatch(setLoading(false));
};

export const changeAttendance = (
  userid,
  employeeid,
  worktype,
  date,
  attendance,
  normalpay,
  overtimepay,
  dispatch,
) => {
  const earnings = {normalpay: normalpay, overtimepay: overtimepay};
  database()
    .ref(`employees/${userid}/${employeeid}/attendance/${date}`)
    .update({...attendance, ...earnings})
    .then(() =>
      dispatch(changeAttendanceAction(employeeid, date, worktype, attendance)),
    );
};
export const addPayment = (userid, employeeid, date, status) => {
  database()
    .ref(`employees/${userid}/-MgKTatO8ndjWru8FJm9/payments`)
    .update({166856: 911});
};

export const calculateEarnings = attendance => {
  Object.entries(attendance).map((item, index) => {
    console.log(item);
  });
};

export const convertDateYMD = utcdate => {
  return moment(utcdate).format('YYYY-MM-DD');
};

export const converDateUTC = date => {
  return moment(date).format('MM-YYYY-DD');
};
