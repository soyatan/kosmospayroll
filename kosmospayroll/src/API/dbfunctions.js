import auth, {firebase} from '@react-native-firebase/auth';

import {setError, setUserAndError, signOutAction} from '../redux/userReducer';
import database from '@react-native-firebase/database';

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

export const fetchEmployees = userid => {
  database()
    .ref('employees/' + userid)
    .once('value')
    .then(function (snapshot) {
      let employees = snapshot.val();
      for (const key in employees) {
        console.log(employees[key]);
        console.log(key);
      }
    });
};

export const signOutUser = dispatch => {
  auth()
    .signOut()
    .then(() => dispatch(signOutAction()))
    .then(console.log('logging out by firebase'));
};

export const signInUser = (dispatch, email, password) => {
  console.log('step1');
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(authData => {
      database()
        .ref('users/' + authData.user.uid)
        .once('value')
        .then(function (snapshot) {
          let newAccount = snapshot.val();
          dispatch(
            setUserAndError(
              newAccount.username,
              newAccount.uid,
              newAccount.email,
              null,
              'firebase',
            ),
          );
        })
        .then(() => {
          console.log('User account signed in!');
        });
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        dispatch(setError('That email address is already in use!'));
      }

      if (error.code === 'auth/invalid-email') {
        dispatch(setError('That email address is invalid!'));
      }

      dispatch(setError('Wrong email or password'));
    });
};

export const forgotPassword = Email => {
  firebase
    .auth()
    .sendPasswordResetEmail(Email)
    .then(function (user) {
      alert('Please check your email...');
    })
    .catch(function (e) {
      console.log(e);
    });
};
