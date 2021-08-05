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
  employee.joindate = joindate;
  employee.isactive = isactive;
  employee.worktype = worktype;
  employee.rate = rate;
  employee.otrate = otrate;
  employee.userid = userid;

  database()
    .ref('employees/' + userid)
    .push(employee)
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
