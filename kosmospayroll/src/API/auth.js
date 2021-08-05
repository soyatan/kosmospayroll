import auth, {firebase} from '@react-native-firebase/auth';

import {setError, setUserAndError, signOutAction} from '../redux/userReducer';
import database from '@react-native-firebase/database';

export const createUser = (dispatch, username, email, password) => {
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(authData => {
      let account = {};
      account.email = email.toLowerCase();
      account.uid = authData.user.uid;
      account.username = username;
      account.currency = null;

      database()
        .ref('users/' + authData.user.uid)
        .set(account)
        .then(() => {
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
                  newAccount.currency,
                  null,
                  'firebase',
                ),
              );
            })
            .then(() => {
              console.log('User account created & signed in!');
            });
        });
    })

    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        dispatch(setError('That email address is already in use!'));
      }

      if (error.code === 'auth/invalid-email') {
        dispatch(setError('That email address is invalid!'));
      }

      console.log(error);
    });
};
/*
export const signOutUser = dispatch => {
  auth()
    .signOut()
    .then(() => dispatch(signOutAction()))
    .then(console.log('logging out by firebase'));
};*/

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
              newAccount.currency,
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
