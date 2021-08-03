import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AttendanceItem from '../AttendanceItem/AttendanceItem';
import DateContainer from '../DateContainer/DateContainer';
import InputComponentAdd from '../Shared/Input/InputComponentAdd';
import styles from './styles';
import InputComponent from './../Shared/Input/InputComponent';

const AddEmployeeScreen = ({navigation}) => {
  const [name, setname] = useState('');
  return (
    <>
      <View style={styles.headeradditioncontainer}></View>
      <View style={{flex: 1, alignItems: 'center'}}>
        <View style={styles.addinfocontainer}>
          <View style={styles.inforow}>
            <Text
              style={{
                backgroundColor: 'yellow',
                flex: 1,
                textAlignVertical: 'center',
              }}>
              Name:
            </Text>
            <View style={styles.inputcontainer}>
              <InputComponentAdd
                state={name}
                onChangeText={setname}
                label={'haydari'}
              />
            </View>
          </View>
          <View style={styles.inforow}>
            <Text
              style={{
                backgroundColor: 'yellow',
                flex: 1,
                textAlignVertical: 'center',
              }}>
              Name:
            </Text>
            <View style={styles.inputcontainer}>
              <InputComponentAdd
                state={name}
                onChangeText={setname}
                label={'haydari'}
              />
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default AddEmployeeScreen;
