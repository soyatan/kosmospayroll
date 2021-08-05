import React, {useEffect, useState} from 'react';
import {View, Text, Button, TouchableOpacity, ScrollView} from 'react-native';
import AttendanceItem from '../AttendanceItem/AttendanceItem';
import DateContainer from '../DateContainer/DateContainer';
import InputComponentAdd from '../Shared/Input/InputComponentAdd';
import styles from './styles';
import InputComponent from './../Shared/Input/InputComponent';
import CheckBox from '@react-native-community/checkbox';
import WorkTypeFilterContainer from './../WorkTypeFilterContainer/WorkTypeFilterContainer';
import WorkTypeFilterContainerSmall from './../WorkTypeFilterContainerSmall/WorkTypeFilterContainerSmall';
import DateTimePicker from '@react-native-community/datetimepicker';
import RoundedButton from './../Shared/Button/RoundedButton';
import {checkAge} from './../../API/Helper';
import {useDispatch, useSelector} from 'react-redux';
import {userSelector} from '../../redux/userReducer';
import {addEmployee} from '../../API/dbfunctions';
import {loadingSelector} from '../../redux/loadingReducer';

const AddEmployeeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const isloading = useSelector(loadingSelector);
  const user = useSelector(userSelector);
  const [name, setname] = useState('');
  const [birthdate, setbirthdate] = useState(new Date());
  const [email, setemail] = useState('');
  const [mobilenumber, setmobilenumber] = useState('');
  const [designation, setdesignation] = useState('');
  const [joindate, setjoindate] = useState(new Date());
  const [workType, setworkType] = useState('');
  const [isActive, setisActive] = useState(true);
  const [rate, setrate] = useState('');
  const [otrate, setotrate] = useState('');
  const [showJoin, setShowJoin] = useState(false);
  const [showBirth, setShowBirth] = useState(false);
  const [error, seterror] = useState('');
  const [isValid, setisValid] = useState({
    name: false,
    birthdate: false,
    email: false,
    mobilenumber: true,
    designation: false,
    joindate: true,
    type: false,
    rate: false,
    otrate: true,
  });
  console.log(
    'n',
    name,
    birthdate,
    email,
    mobilenumber,
    designation,
    'joindate',
    joindate,
    workType,
    rate,
    otrate,
  );
  useEffect(() => {
    if (workType) {
      const newValidList = {...isValid};
      newValidList.type = true;
      setisValid(newValidList);
      seterror(null);
    }
  }, [workType]);

  const validateName = () => {
    if (name.length >= 3) {
      const newValidList = {...isValid};
      newValidList.name = true;
      setisValid(newValidList);
      seterror(null);
    } else {
      const newValidList = {...isValid};
      newValidList.name = false;
      setisValid(newValidList);
      seterror('Name must be minimum 3 characters');
    }
  };
  const validateBirthDate = date => {
    if (Math.ceil(checkAge(date)) >= 18) {
      const newValidList = {...isValid};
      newValidList.birthdate = true;
      setisValid(newValidList);
      seterror(null);
    } else {
      const newValidList = {...isValid};
      newValidList.birthdate = false;
      setisValid(newValidList);
      seterror('Employee must be older than 18 years');
    }
  };
  const validateEmail = () => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(email).toLowerCase()) | !email) {
      const newValidList = {...isValid};
      newValidList.email = true;
      setisValid(newValidList);
      seterror(null);
    } else {
      const newValidList = {...isValid};
      newValidList.email = false;
      setisValid(newValidList);
      seterror('Please enter valid e-mail address');
    }
  };

  const validateMobile = () => {
    var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    if (re.test(mobilenumber) | !mobilenumber) {
      const newValidList = {...isValid};
      newValidList.mobilenumber = true;
      setisValid(newValidList);
      seterror(null);
    } else {
      const newValidList = {...isValid};
      newValidList.mobilenumber = false;
      setisValid(newValidList);
      seterror('Please enter valid mobile phone number');
    }
  };
  const validateRate = () => {
    const pattern = /^-?\d*(\.\d+)?$/;

    if (rate.match(pattern)) {
      const newValidList = {...isValid};
      newValidList.rate = true;
      setisValid(newValidList);
      seterror(null);
    } else {
      const newValidList = {...isValid};
      newValidList.rate = false;
      setisValid(newValidList);
      seterror('Invalid entry for rate');
    }
  };

  const validateOtRate = () => {
    const pattern = /^-?\d*(\.\d+)?$/;

    if (otrate.match(pattern)) {
      const newValidList = {...isValid};
      newValidList.otrate = true;
      setisValid(newValidList);
      seterror(null);
    } else {
      const newValidList = {...isValid};
      newValidList.otrate = false;
      setisValid(newValidList);
      seterror('Invalid entry for overtime rate');
    }
  };
  const validateDesignation = () => {
    if (designation.length >= 3) {
      const newValidList = {...isValid};
      newValidList.designation = true;
      setisValid(newValidList);
      seterror(null);
    } else {
      const newValidList = {...isValid};
      newValidList.designation = false;
      setisValid(newValidList);
      seterror('Designation must be minimum 3 characters');
    }
  };

  const validateAll = () => {
    if (!name || !designation || !workType || !rate) {
      seterror('Please enter all required information');
    } else if (Object.values(isValid).includes(false)) {
      if (!isValid.name) {
        validateName();
      } else if (!isValid.rate) {
        validateRate();
      } else if (!isValid.mobilenumber) {
        validateMobile();
      } else if (!isValid.designation) {
        validateDesignation();
      } else if (!isValid.birthdate) {
        validateBirthDate(birthdate);
      } else if (!isValid.email) {
        validateEmail();
      }
    } else {
      addEmployee(
        name,
        Date.parse(birthdate),
        email,
        mobilenumber,
        designation,
        Date.parse(joindate),
        workType,
        isActive,
        rate,
        otrate,
        user.userid,
      );
    }
  };

  const switchActive = () => {
    if (isActive) {
      setisActive(false);
    } else {
      setisActive(true);
    }
  };
  const onChangeJD = (event, selectedDate) => {
    const currentDate = selectedDate || joindate;
    setShowJoin(Platform.OS === 'ios');
    setjoindate(currentDate);
  };
  const onChangeBD = (event, selectedDate) => {
    const currentDate = selectedDate || birthdate;
    setShowBirth(Platform.OS === 'ios');
    setbirthdate(currentDate);
    validateBirthDate(currentDate);
  };
  return (
    <>
      <View style={styles.headeradditioncontainer}>
        {error ? (
          <View style={{marginVertical: 5}}>
            <Text style={styles.errormessage}>* {error}</Text>
          </View>
        ) : null}
      </View>

      <ScrollView contentContainerStyle={{alignItems: 'center'}}>
        <View style={styles.addinfocontainer}>
          <Text style={styles.texttitle}>Personal information</Text>
          <View style={styles.inforow}>
            <Text style={styles.inputtitle}>Name </Text>
            <View style={styles.inputcontainer}>
              <InputComponentAdd
                state={name}
                onChangeText={setname}
                label={'Name'}
                onEndEditing={validateName}
              />
            </View>
          </View>
          <View style={styles.inforow}>
            <Text style={styles.inputtitle}>Date of Birth</Text>
            <View style={styles.inputcontainer}>
              <View style={{alignSelf: 'flex-start', marginLeft: 15}}>
                <Text onPress={() => setShowBirth(true)}>
                  {birthdate.toLocaleDateString('en-gb')}
                </Text>
              </View>
              {showBirth && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={birthdate}
                  mode={'date'}
                  is24Hour={true}
                  display={'spinner'}
                  onChange={onChangeBD}
                />
              )}
            </View>
          </View>

          <View style={styles.inforow}>
            <Text style={styles.inputtitle}>
              Email <Text style={styles.shadytext}>(opt..)</Text>
            </Text>
            <View style={styles.inputcontainer}>
              <InputComponentAdd
                state={email}
                onChangeText={setemail}
                label={'Email'}
                keyboardType={'email-address'}
                onEndEditing={validateEmail}
              />
            </View>
          </View>
          <View style={styles.inforow}>
            <Text style={styles.inputtitle}>
              Mobile <Text style={styles.shadytext}> (opt..)</Text>
            </Text>
            <View style={styles.inputcontainer}>
              <InputComponentAdd
                state={mobilenumber}
                onChangeText={setmobilenumber}
                label={'Mobile Number'}
                onEndEditing={validateMobile}
              />
            </View>
          </View>
        </View>
        <View style={styles.addinfocontainer}>
          <Text style={styles.texttitle}>Work information</Text>
          <View style={styles.inforow}>
            <Text style={styles.inputtitle}>Designation</Text>
            <View style={styles.inputcontainer}>
              <InputComponentAdd
                state={designation}
                onChangeText={setdesignation}
                label={'Designation'}
                onEndEditing={validateDesignation}
              />
            </View>
          </View>
          <View style={styles.inforow}>
            <Text style={styles.inputtitle}>
              Joining Date <Text style={styles.shadytext}> (opt..)</Text>
            </Text>
            <View style={styles.inputcontainer}>
              <View style={{alignSelf: 'flex-start', marginLeft: 15}}>
                <Text onPress={() => setShowJoin(true)}>
                  {joindate.toLocaleDateString('en-gb')}
                </Text>
              </View>
              {showJoin && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={joindate}
                  mode={'date'}
                  is24Hour={true}
                  display={'spinner'}
                  display="default"
                  onChange={onChangeJD}
                />
              )}
            </View>
          </View>
          <View style={styles.inforow}>
            <Text style={styles.inputtitle}>Type:</Text>
            <View style={styles.inputcontainer}>
              <WorkTypeFilterContainerSmall
                selectedoption={workType}
                onPress={setworkType}
              />
            </View>
          </View>

          {workType === 'hourly' ? (
            <View style={styles.inforow}>
              <Text style={styles.inputtitle}>Hourly Rate:</Text>
              <View style={styles.inputcontainer}>
                <InputComponentAdd
                  state={rate}
                  onChangeText={setrate}
                  label={'Hourly Rate'}
                  keyboardType={'numeric'}
                  onEndEditing={validateRate}
                />
              </View>
            </View>
          ) : null}
          {workType === 'daily' ? (
            <View style={styles.inforow}>
              <Text style={styles.inputtitle}>Daily Rate:</Text>
              <View style={styles.inputcontainer}>
                <InputComponentAdd
                  state={rate}
                  onChangeText={setrate}
                  label={'Daily Rate'}
                  keyboardType={'numeric'}
                  onEndEditing={validateRate}
                />
              </View>
            </View>
          ) : null}

          {(workType === 'hourly') | (workType === 'daily') ? (
            <View style={styles.inforow}>
              <Text style={styles.inputtitle}>Overtime Rate:</Text>
              <View style={styles.inputcontainer}>
                <InputComponentAdd
                  state={otrate}
                  onChangeText={setotrate}
                  label={'Overtime Rate'}
                  keyboardType={'numeric'}
                  onEndEditing={validateOtRate}
                />
              </View>
            </View>
          ) : null}
          {workType === 'monthly' ? (
            <>
              <View style={styles.inforow}>
                <Text style={styles.inputtitle}>Monthly Salary:</Text>
                <View style={styles.inputcontainer}>
                  <InputComponentAdd
                    state={rate}
                    onChangeText={setrate}
                    label={'Monthly Salary'}
                    keyboardType={'numeric'}
                    onEndEditing={validateRate}
                  />
                </View>
              </View>
            </>
          ) : null}
          <View style={styles.inforow}>
            <Text style={styles.inputtitle}>Status:</Text>
            <View style={styles.checkboxcontainer}>
              <Text>Active</Text>
              <CheckBox
                disabled={false}
                value={isActive}
                onValueChange={newValue => switchActive(newValue)}
              />
              <Text>Passive</Text>
              <CheckBox
                disabled={false}
                value={!isActive}
                onValueChange={newValue => switchActive(newValue)}
              />
            </View>
          </View>
        </View>

        <View style={styles.savebutton}>
          <RoundedButton
            label={'SAVE'}
            bg_color={'mainPink'}
            text_color={'mainWhite'}
            onPress={() => validateAll()}
            isloading={isloading}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default AddEmployeeScreen;
