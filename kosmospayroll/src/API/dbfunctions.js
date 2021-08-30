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
import {formatCurrency} from './Helper';
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
      dispatch(
        changeAttendanceAction(
          employeeid,
          date,
          worktype,
          attendance,
          normalpay,
          overtimepay,
        ),
      ),
    );
};
export const addPayment = (
  userid,
  employeeid,
  date,
  amount,
  note,
  dispatch,
  navigation,
) => {
  database()
    .ref(`employees/${userid}/${employeeid}/payments`)
    .push({date, amount, note})
    .then(() => {
      navigation.navigate('Roster');
    });
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
const lastday = (y, m) => {
  return new Date(y, m + 1, 0).getDate();
};

const calculatefirstmonth = joindate => {
  const indexofmonth = moment(joindate).month();
  const indexofyear = moment(joindate).year();
  const indexofday = moment(joindate).date();
  const lastdayofmonth = lastday(indexofyear, indexofmonth);
  const daysearned = lastdayofmonth - indexofday;
  //console.log(daysearned, lastdayofmonth);
  return daysearned / lastdayofmonth;
};
const calculatejoinandtoday = joindate => {
  const indexofday = moment(joindate).date();
  const today = moment(new Date()).date();
  return today - indexofday;
};
const calculatelastmonth = () => {
  const indexofmonth = moment(new Date()).month();
  const indexofyear = moment(new Date()).year();
  const lastdayofmonth = lastday(indexofyear, indexofmonth);
  const daysearned = moment(new Date()).date();

  return daysearned / lastdayofmonth;
};

export const calculateTotalEarnings = emp => {
  let earnings = {normalpay: 0, overtimepay: 0};

  if (emp.worktype === 'monthly') {
    earnings.normalpay =
      earnings.normalpay + calculateMonths(emp.joindate) * emp.rate;
  } else if (emp.attendance) {
    Object.keys(emp.attendance).map((item, index) => {
      earnings.normalpay = earnings.normalpay + emp.attendance[item].normalpay;
      earnings.overtimepay =
        earnings.overtimepay + emp.attendance[item].overtimepay;
    });
  }

  return earnings;
};

export const calculateTotalPayments = emp => {
  let payments = 0;

  if (!emp.payments || emp.payments.length < 1) {
    return payments;
  } else {
    Object.values(emp.payments).map(payment => {
      payments += payment.amount;
    });
  }
  return payments;
};

export const calculateGlobalBalance = employees => {
  let totalbalance = 0;
  let currency = 'TRY';
  employees.forEach(section => {
    if (section.data.length > 0) {
      section.data.forEach(emp => {
        let balance =
          calculateTotalEarnings(emp).normalpay +
          calculateTotalEarnings(emp).overtimepay -
          calculateTotalPayments(emp);

        totalbalance = totalbalance + balance;
        currency = emp.currency;
      });
    }
  });

  return formatCurrency(totalbalance, currency);
};

export const calculateMonthlyEarnings = emp => {
  let earnings = {};
  if (emp.attendance) {
    if (emp.worktype === 'monthly') {
      //console.log(emp.joindate);
      const ymjoindate = moment(emp.joindate).format('YYYY-MM');

      const ymtoday = moment(new Date()).format('YYYY-MM');
      const ymjoinindex = moment(emp.joindate).month();
      const ymtodayindex = moment(new Date()).month();

      const monthspassed = moment(ymtoday).diff(
        moment(ymjoindate),
        'months',
        true,
      );

      for (let i = 0; i <= monthspassed; i++) {
        const ymfull = moment(ymjoindate).add(i, 'months');
        const ym = moment(ymfull).format('YYYY-MM');

        if (i === 0 && i !== monthspassed) {
          earnings[ym] = {
            normalpay: calculatefirstmonth(emp.joindate) * emp.rate,
            overtimepay: 0,
          };
        } else if (i === 0 && i === monthspassed) {
          earnings[ym] = {
            normalpay: calculatejoinandtoday(emp.joindate) * emp.rate,
            overtimepay: 0,
          };
        } else if (i > 0 && i !== monthspassed) {
          earnings[ym] = {
            normalpay: emp.rate,
            overtimepay: 0,
          };
        } else if (i > 0 && i === monthspassed) {
          earnings[ym] = {
            normalpay: calculatelastmonth() * emp.rate,
            overtimepay: 0,
          };
        }
      }
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
  }
  return earnings;
};
export const convertDateYMD = utcdate => {
  return moment(utcdate).format('YYYY-MM-DD');
};

export const converDateUTC = date => {
  return moment(date).format('MM-YYYY-DD');
};

export const calculateSplitEarnings = (earnings, currentMonth) => {
  //const premonth = new Date(moment(currentMonth).subtract(1, 'months'));
  //const ympre = moment(premonth).format('YYYY-MM');
  const ymthis = moment(currentMonth).format('YYYY-MM');

  let balances = {current: 0, previous: 0, final: 0};
  Object.keys(earnings).map(ym => {
    if (ym === ymthis) {
      balances.current = earnings[ym].normalpay + earnings[ym].overtimepay;
    } else {
      let addbalance = earnings[ym].normalpay + earnings[ym].overtimepay;
      balances.previous = balances.previous + addbalance;
    }
    balances.final = balances.current + balances.previous;
  });
  return balances;
};
export const calculateSplitPayments = (employee, currentMonth) => {
  const ymthis = moment(currentMonth).format('YYYY-MM');
  let payments = {current: 0, previous: 0};
  try {
    if (employee.payments) {
      Object.values(employee.payments).map(id => {
        let ym = moment(id.date).format('YYYY-MM');

        if (ym === ymthis) {
          payments.current = payments.current + id.amount;
        } else {
          payments.previous = payments.previous + id.amount;
        }
      });
    }
  } catch (error) {
    console.log('some error occured');
  }

  return payments;
};

export const createPaymentsList = employees => {
  let paymentsList = [];
  employees.map(section => {
    section.data.map(employee => {
      if (employee.payments) {
        Object.values(employee.payments).map(payment => {
          paymentsList.push({...payment, name: employee.name});
        });
      }
    });
  });
  paymentsList.sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
  });
  return paymentsList;
};
