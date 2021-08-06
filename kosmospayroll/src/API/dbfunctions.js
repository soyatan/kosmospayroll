import auth, {firebase} from '@react-native-firebase/auth';

import {setError, setUserAndError, signOutAction} from '../redux/userReducer';
import database from '@react-native-firebase/database';
import {setEmployees} from '../redux/employeesReducer';
import {setLoading} from '../redux/loadingReducer';

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
  employee.attendance = {165748: 8};

  database()
    .ref('employees/' + userid)
    .push(employee)
    .catch(error => {
      console.log(error);
    });
};

export const addCurrency = (dispatch, currency, company, userid) => {
  database()
    .ref('users/' + userid)
    .update({
      currency: currency,
      company: company,
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
      let employeeeList = [];
      let employees = snapshot.val();
      for (const key in employees) {
        employeeeList.push({key: key, ...employees[key]});
      }
      return employeeeList;
    });
  dispatch(setEmployees(empList));
  dispatch(setLoading(false));
};

export const markAttendance = (userid, employeeid, date, status) => {
  database()
    .ref(`employees/${userid}/-MgKTatO8ndjWru8FJm9/attendance`)
    .update({166856: 911});
};

export const addPayment = (userid, employeeid, date, status) => {
  database()
    .ref(`employees/${userid}/-MgKTatO8ndjWru8FJm9/payments`)
    .update({166856: 911});
};
