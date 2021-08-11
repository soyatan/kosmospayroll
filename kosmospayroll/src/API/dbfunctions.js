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

export const calculateEarnings = (attendance, id) => {
  let earnings = {normalpay: 0, overtimepay: 0};
  attendance.forEach(element => {
    element.data.filter(employee => {
      if (employee.key === id) {
        Object.keys(employee.attendance).map((item, index) => {
          earnings.normalpay =
            earnings.normalpay + employee.attendance[item].normalpay;
          earnings.overtimepay =
            earnings.overtimepay + employee.attendance[item].overtimepay;
        });
      }
    });
  });
  return earnings;
};

const calculateMonths = date => {
  var a = moment(new Date());

  return a.diff(moment(date), 'months', true);
};
const calculateMonthsDiff = (a, b) => {
  return a.diff(moment(b), 'months', true);
};
export const calculateTotalEarnings = emp => {
  let earnings = {normalpay: 0, overtimepay: 0};
  if (emp.worktype === 'monthly') {
    earnings.normalpay =
      earnings.normalpay + calculateMonths(emp.joindate) * emp.rate;
  } else {
    Object.keys(emp.attendance).map((item, index) => {
      earnings.normalpay = earnings.normalpay + emp.attendance[item].normalpay;
      earnings.overtimepay =
        earnings.overtimepay + emp.attendance[item].overtimepay;
    });
  }

  return earnings;
};
export const calculateMonthlyEarnings = emp => {
  //console.log(emp);
  let earnings = {};
  if (emp.worktype === 'monthly') {
    const ymjoindate = moment(emp.joindate).format('YYYY-MM');
    const ymtoday = moment(new Date()).format('YYYY-MM');

    Object.keys(emp.attendance).map((item, index) => {
      const ym = moment(item).format('YYYY-MM');

      if (ym === ymjoindate || ym !== ymtoday) {
        earnings[ym] = {
          normalpay: calculateMonths(emp.joindate) * emp.rate,
          overtimepay: 0,
        };
      } else if (ym === ymjoindate || ym === ymtoday) {
        earnings[ym] = {
          normalpay: emp.rate,
          overtimepay: 0,
        };
      } else {
        earnings[ym] = {
          normalpay: emp.rate,
          overtimepay: 0,
        };
      }
      //sonrası çöp, 3 senaryo yukarıda
      if (!earnings[ym]) {
        earnings[ym] = {
          normalpay: emp.attendance[item].normalpay,
          overtimepay: emp.attendance[item].overtimepay,
        };
      } else {
        earnings[ym] = {
          normalpay: earnings[ym].normalpay + emp.attendance[item].normalpay,
          overtimepay:
            earnings[ym].overtimepay + emp.attendance[item].overtimepay,
        };
      }
    });
  } else {
    Object.keys(emp.attendance).map((item, index) => {
      const ym = moment(item).format('YYYY-MM');

      if (!earnings[ym]) {
        earnings[ym] = {
          normalpay: emp.attendance[item].normalpay,
          overtimepay: emp.attendance[item].overtimepay,
        };
      } else {
        earnings[ym] = {
          normalpay: earnings[ym].normalpay + emp.attendance[item].normalpay,
          overtimepay:
            earnings[ym].overtimepay + emp.attendance[item].overtimepay,
        };
      }
    });
  }
  //console.log(earnings);
  return earnings;
};
export const convertDateYMD = utcdate => {
  return moment(utcdate).format('YYYY-MM-DD');
};

export const converDateUTC = date => {
  return moment(date).format('MM-YYYY-DD');
};
