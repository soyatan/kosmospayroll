import React, {useCallback, useEffect, useMemo, useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  KeyboardAvoidingView,
} from 'react-native';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import styles from './styles';
import InputComponent from './../../Input/InputComponent';
import RoundedButton from './../../Button/RoundedButton';
import {Icon} from '../../../../Assets/Svgs/icon';
import {useDispatch, useSelector} from 'react-redux';
import {setError, userSelector} from '../../../../redux/userReducer';
import {createUser, signInUser} from '../../../../API/auth';

const SigninDrawer = ({
  isModalShown,
  setisModalShown,
  isSignup,
  setisSignup,
}) => {
  const [userName, setuserName] = useState('');
  const [password, setpassword] = useState('');
  const [confirmpw, setconfirmpw] = useState('');
  const [email, setemail] = useState('');
  const [showPassword, setshowPassword] = useState(false);
  const [isValidUsername, setisValidUsername] = useState(false);
  const [isValidEmail, setisValidEmail] = useState(false);
  const [isValidPW, setisValidPW] = useState(false);
  const [isConfirmPW, setisConfirmPW] = useState(false);
  const [isNew, setisNew] = useState({
    username: true,
    password: true,
    email: true,
  });
  const user = useSelector(userSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isModalShown) {
      handlePresentModalPress();
    }
  }, [isModalShown]);

  useEffect(() => {
    setisNew({username: true, password: true, email: true});
    setemail('');
    setpassword('');
    setconfirmpw('');
    setuserName('');
    if (isSignup) {
      bottomSheetModalRef.current.expand();
    } else {
      bottomSheetModalRef.current.snapTo(3);
    }
  }, [isSignup]);

  useEffect(() => {
    setTimeout(() => {
      setisModalShown(true);
    }, 300);
  }, []);
  const bottomSheetModalRef = useRef(BottomSheetModal);

  const snapPoints = useMemo(() => ['0%', '65%', '81%'], []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current.present();
  }, []);

  const validateEmail = () => {
    setisNew({...isNew, email: false});
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(email).toLowerCase())) {
      setisValidEmail(true);
      dispatch(setError(null));
    } else {
      setisValidEmail(false);
      dispatch(setError('Please enter valid e-mail address'));
    }
  };
  const validateUserName = () => {
    setisNew({...isNew, username: false});
    if (userName.length >= 6) {
      setisValidUsername(true);
      dispatch(setError(null));
    } else {
      setisValidUsername(false);
      dispatch(setError('Please enter valid phone, user name or e-mail'));
    }
  };
  const validatePW = () => {
    setisNew({...isNew, password: false});
    if (isSignup && password !== confirmpw) {
      dispatch(setError("Passwords don't match"));
    } else if (password.length >= 6) {
      setisValidPW(true);
      dispatch(setError(null));
    } else {
      setisValidPW(false);
      dispatch(setError('Please enter valid password'));
    }
  };
  const switchShowPassword = () => {
    if (showPassword) {
      setshowPassword(false);
    } else {
      setshowPassword(true);
    }
  };
  function customBackground({pointerEvents, style}) {
    return <View style={[styles.signincontainer, style]} />;
  }
  const loginUser = () => {
    if (isSignup) {
      setisSignup(false);
    } else if (
      !isValidEmail ||
      !isValidPW ||
      !email ||
      !password ||
      password.length < 6
    ) {
      dispatch(setError('Please enter valid email and password'));
    } else {
      signInUser(dispatch, email, password);
    }
  };

  const registerUser = () => {
    if (
      !isValidEmail ||
      !isValidPW ||
      !isValidUsername ||
      !userName ||
      !email ||
      !password ||
      password.length < 6 ||
      password !== confirmpw
    ) {
      dispatch(setError('Please enter valid credentials'));
    } else {
      createUser(dispatch, userName, email, password);
    }
  };

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        backgroundComponent={customBackground}
        ref={bottomSheetModalRef}
        index={1}
        enableContentPanningGesture={false}
        snapPoints={snapPoints}
        handleComponent={() => null}>
        <View style={styles.contentContainer}>
          {isSignup ? (
            <>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}>
                <Text style={styles.blacktext}>Username</Text>
                <View style={{position: 'absolute', right: 10}}>
                  {!isNew.username && isValidUsername ? (
                    <Icon name={'validate'} scale={1} />
                  ) : !isNew.username && !isValidUsername ? (
                    <Icon name={'cross'} scale={0.7} />
                  ) : null}
                </View>
              </View>
              <InputComponent
                iconname={'user'}
                label={'Your Username'}
                state={userName}
                onChangeText={text => {
                  setuserName(text);
                  validateUserName();
                }}
                onEndEditing={validateUserName}
              />
            </>
          ) : null}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <Text style={styles.blacktext}>Email Address</Text>
            <View style={{position: 'absolute', right: 10}}>
              {!isNew.email && isValidEmail ? (
                <Icon name={'validate'} scale={1} />
              ) : !isNew.email && !isValidEmail ? (
                <Icon name={'cross'} scale={0.7} />
              ) : null}
            </View>
          </View>
          <InputComponent
            iconname={'envelope'}
            label={'Your Email'}
            state={email}
            onChangeText={text => {
              setemail(text);
              validateEmail();
            }}
            onEndEditing={validateEmail}
            keyboardType={'email-address'}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <Text style={styles.blacktext}>Password</Text>
            <View
              style={{
                position: 'absolute',
                right: 10,
                justifyContent: 'center',
              }}>
              {!isNew.password && isValidPW ? (
                <Icon name={'validate'} scale={1} />
              ) : !isNew.password && !isValidPW ? (
                <Icon name={'cross'} scale={0.7} />
              ) : null}
            </View>
          </View>
          <InputComponent
            iconname={'padlock'}
            label={'Your Password'}
            secureTextEntry={!showPassword ? true : null}
            iconOnPress={() => switchShowPassword()}
            state={password}
            onChangeText={text => {
              setpassword(text);
              validatePW();
            }}
            onEndEditing={validatePW}
          />
          {isSignup ? (
            <>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}>
                <Text style={styles.blacktext}>Confirm Password</Text>
                <View
                  style={{
                    position: 'absolute',
                    right: 10,
                    justifyContent: 'center',
                  }}>
                  {!isNew.password && isValidPW ? (
                    <Icon name={'validate'} scale={1} />
                  ) : !isNew.password && !isValidPW ? (
                    <Icon name={'cross'} scale={0.7} />
                  ) : null}
                </View>
              </View>
              <InputComponent
                iconname={'padlock'}
                label={'Your Password'}
                secureTextEntry={!showPassword ? true : null}
                iconOnPress={() => switchShowPassword()}
                state={confirmpw}
                onChangeText={text => {
                  setconfirmpw(text);
                  validatePW();
                }}
                onEndEditing={validatePW}
              />
            </>
          ) : null}
          <TouchableOpacity>
            <Text style={styles.redtext}>Forgot password?</Text>
          </TouchableOpacity>
          <View style={styles.errormessagecontainer}>
            {user.errorMessage ? (
              <Text style={styles.redtext}>{user.errorMessage}</Text>
            ) : null}
          </View>
          <View enabled={true} style={styles.signinbuttonscontainer}>
            <RoundedButton
              label={'Sign In'}
              bg_color={'mainPink'}
              text_color={'mainBlack'}
              onPress={() => loginUser()}
            />
            <RoundedButton
              label={'Google Login'}
              bg_color={'blue'}
              text_color={'mainWhite'}
              iconname={'google'}
            />
            <RoundedButton
              label={'Sign Up'}
              bg_color={'mainLightGray'}
              text_color={'mainPink'}
              onPress={() => {
                if (!isSignup) {
                  setisSignup(true);
                } else {
                  registerUser();
                }
              }}
            />
          </View>
        </View>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

export default SigninDrawer;
