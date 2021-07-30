import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {WEB_CLIENT_ID} from '../utils/keys';
import database from '@react-native-firebase/database';
import {setError, setUserAndError, signOutAction} from '../redux/userReducer';

export function configureGoogleSign() {
  GoogleSignin.configure();
}

export async function signIn(dispatch) {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    let account = {};
    account.email = userInfo.user.email;
    account.uid = userInfo.user.id;
    account.username = userInfo.user.givenName;
    account.popCoin = 100;
    account.ownedBoards = [1, 3, 10, 14];
    database()
      .ref('users/' + userInfo.user.id)
      .once('value', snapshot => {
        if (snapshot.exists()) {
          console.log('user exists in database');
          let newAccount = snapshot.val();
          dispatch(
            setUserAndError(
              newAccount.username,
              newAccount.uid,
              null,
              'google',
              newAccount.popCoin,
              newAccount.ownedBoards,
            ),
          );
        } else {
          database()
            .ref('users/' + userInfo.user.id)
            .set(account)
            .then(() => {
              database()
                .ref('users/' + userInfo.user.id)
                .once('value')
                .then(function (snapshot) {
                  let newAccount = snapshot.val();
                  dispatch(
                    setUserAndError(
                      newAccount.username,
                      newAccount.uid,
                      null,
                      'google',
                      100,
                      [1, 3, 10, 14],
                    ),
                  );
                });
            });
        }
      });
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // when user cancels sign in process,
      //Alert.alert('Process Cancelled');
      //dispatch(setError(error));
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // when in progress already
      dispatch(setError(error.message));
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // when play services not available
      //Alert.alert('Play services are not available');
      dispatch(setError(error.message));
    } else {
      // some other error
      //Alert.alert('Something else went wrong... ', error.toString());
      dispatch(setError(error.message));
    }
  }
}

export async function getCurrentUserInfo(dispatch) {
  try {
    const userInfo = await GoogleSignin.signInSilently();
    dispatch(
      setUserAndError(
        userInfo.user.givenName,
        userInfo.user.id,
        null,
        'google',
      ),
    );
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_REQUIRED) {
      // when user hasn't signed in yet
      //Alert.alert('Please Sign in');
      //      await dispatch(setUser(null, null));
    } else {
      //Alert.alert('Something else went wrong... ', error.toString());
      await dispatch(setError(error));
    }
  }
}
export async function signOutGoogle(dispatch) {
  try {
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
    dispatch(signOutAction());
  } catch (error) {
    // Alert.alert('Something else went wrong... ', error.toString());
    await dispatch(setError(error));
  }
}
