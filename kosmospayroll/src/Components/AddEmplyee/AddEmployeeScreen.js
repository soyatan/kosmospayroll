import React, {useState} from 'react';
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
const AddEmployeeScreen = ({navigation}) => {
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
  };
  return (
    <>
      <View style={styles.headeradditioncontainer}></View>
      <ScrollView contentContainerStyle={{alignItems: 'center'}}>
        <View style={styles.addinfocontainer}>
          <Text style={styles.texttitle}>Personal information</Text>
          <View style={styles.inforow}>
            <Text style={styles.inputtitle}>Name:</Text>
            <View style={styles.inputcontainer}>
              <InputComponentAdd
                state={name}
                onChangeText={setname}
                label={'Name'}
              />
            </View>
          </View>
          <View style={styles.inforow}>
            <Text style={styles.inputtitle}>Date of Birth:</Text>
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
            <Text style={styles.inputtitle}>Email:</Text>
            <View style={styles.inputcontainer}>
              <InputComponentAdd
                state={email}
                onChangeText={setemail}
                label={'Email'}
              />
            </View>
          </View>
          <View style={styles.inforow}>
            <Text style={styles.inputtitle}>Mobile Number:</Text>
            <View style={styles.inputcontainer}>
              <InputComponentAdd
                state={mobilenumber}
                onChangeText={setmobilenumber}
                label={'Mobile Number'}
              />
            </View>
          </View>
        </View>
        <View style={styles.addinfocontainer}>
          <Text style={styles.texttitle}>Work information</Text>
          <View style={styles.inforow}>
            <Text style={styles.inputtitle}>Designation:</Text>
            <View style={styles.inputcontainer}>
              <InputComponentAdd
                state={designation}
                onChangeText={setdesignation}
                label={'Designation'}
              />
            </View>
          </View>
          <View style={styles.inforow}>
            <Text style={styles.inputtitle}>Joining Date:</Text>
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
          />
        </View>
      </ScrollView>
    </>
  );
};

export default AddEmployeeScreen;
