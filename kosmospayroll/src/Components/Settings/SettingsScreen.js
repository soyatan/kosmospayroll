import React, {useState, useRef} from 'react';
import {View, Text, Modal, TouchableOpacity, TextInput} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {signOutAction, userSelector} from '../../redux/userReducer';
import styles from './styles';
import {Picker} from '@react-native-picker/picker';
import {currencies} from '../../API/currencies';
import RoundedButton from './../Shared/Button/RoundedButton';
import {addCurrency} from '../../API/dbfunctions';

import SimpleInput from '../Shared/Input/SimpleInput';
import {hours, shifthours} from '../../API/hours';

const SettingsScreen = ({navigation}) => {
  const user = useSelector(userSelector);
  const [currency, setcurrency] = useState('USD');
  const [company, setcompany] = useState('');
  const [workHours, setworkHours] = useState(10);
  const [modalVisible, setmodalVisible] = useState(false);
  const dispatch = useDispatch();
  const pickerRef = useRef();

  return (
    <View style={styles.container}>
      <Picker
        value={workHours}
        style={{
          width: 0,
          height: 0,
          backgroundColor: 'white',
          position: 'absolute',
        }}
        ref={pickerRef}
        selectedValue={workHours}
        onValueChange={(itemValue, itemIndex) => setworkHours(itemValue)}>
        {shifthours.map((item, index) => {
          return (
            <Picker.Item
              label={item.toString()}
              value={item}
              key={index.toString()}
              style={styles.pickeritem}
            />
          );
        })}
      </Picker>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modal}>
          {(company || user.company) &&
          (currency || user.currency) &&
          (workHours || user.workhours) ? (
            <>
              <Text style={styles.blacktext}>
                {`Currency selected - `}
                <Text style={styles.bigpinktext}>{currency}</Text>
              </Text>
              <View style={{marginVertical: 10}}></View>
              <Text style={styles.blacktext}>
                {`Company name - `}
                <Text style={styles.bigpinktext}>
                  {company || user.company}
                </Text>
              </Text>
              <View style={{marginVertical: 10}}></View>
              <Text style={styles.blacktext}>
                Daily Work Shift -
                <Text style={styles.bigpinktext}>
                  {workHours || user.workhours} hrs
                </Text>
              </Text>
              <View style={{marginVertical: 10}}></View>
            </>
          ) : (
            <>
              <Text style={styles.blacktext}>
                Please enter all required information
              </Text>
              <View style={{marginVertical: 10}}></View>
            </>
          )}
          {(company || user.company) &&
          (currency || user.currency) &&
          (workHours || user.workhours) ? (
            <View style={styles.modalbutton}>
              <RoundedButton
                label={'Confirm'}
                text_color={'mainBlack'}
                bg_color={'mainPink'}
                onPress={() =>
                  addCurrency(
                    dispatch,
                    currency,
                    company,
                    workHours,
                    user.userid,
                  )
                }
              />
            </View>
          ) : null}
          <View style={styles.modalbutton}>
            <RoundedButton
              label={'Go Back'}
              text_color={'mainBlack'}
              bg_color={'mainGray'}
              onPress={() => setmodalVisible(false)}
            />
            {company && currency && workHours ? (
              <Text style={styles.shadytext}>*Can not be changed later</Text>
            ) : null}
          </View>
        </View>
      </Modal>
      <View style={styles.settingrow}>
        <View style={styles.leftcontainer}>
          <Text style={styles.blacktext}>User</Text>
        </View>
        <View style={styles.rightcontaineruser}>
          <Text style={styles.pickeritem}>{user.email}</Text>
        </View>
      </View>
      <View style={styles.settingrow}>
        <View style={styles.leftcontainer}>
          <Text style={styles.blacktext}>Company Name</Text>
        </View>
        <View style={styles.rightcontainer}>
          {!user.company ? (
            <SimpleInput
              label={'Company Name'}
              state={company}
              onChangeText={setcompany}
            />
          ) : (
            <View style={styles.rightcontaineruser}>
              <Text style={styles.pickeritem}>{user.company}</Text>
            </View>
          )}
        </View>
      </View>
      <View style={styles.settingrow}>
        <View style={styles.leftcontainer}>
          <Text style={styles.blacktext}>Default Currency</Text>
        </View>
        <View style={styles.rightcontainer}>
          {!user.currency ? (
            <Picker
              selectedValue={currency}
              onValueChange={(itemValue, itemIndex) => setcurrency(itemValue)}>
              {Object.values(currencies).map((item, index) => {
                return (
                  <Picker.Item
                    label={`${item.name}-${item.symbol}`}
                    value={item.code}
                    key={index.toString()}
                    style={styles.pickeritem}
                  />
                );
              })}
            </Picker>
          ) : (
            <View style={styles.rightcontaineruser}>
              <Text style={styles.pickeritem}>{user.currency}</Text>
            </View>
          )}
        </View>
      </View>
      <View style={styles.settingrow}>
        <View style={styles.leftcontainer}>
          <Text style={styles.blacktext}>Daily Work Shift (hours)</Text>
        </View>
        <View style={styles.rightcontainer}>
          {!user.workhours ? (
            <TouchableOpacity
              style={styles.workhourscontainer}
              onPress={() => pickerRef.current.focus()}>
              <Text style={styles.blacktext}>{workHours.toFixed(2)}</Text>
            </TouchableOpacity>
          ) : (
            <Text style={styles.pickeritem}>{user.workhours.toFixed(2)}</Text>
          )}
        </View>
      </View>
      {!user.currency || !user.company || !user.workhours ? (
        <View style={styles.buttoncontainer}>
          <RoundedButton
            label={'Continue'}
            text_color={'mainBlack'}
            bg_color={'mainPink'}
            onPress={() => setmodalVisible(true)}
          />
        </View>
      ) : null}
      <View style={styles.buttoncontainer}>
        <RoundedButton
          label={'Sign Out'}
          text_color={'mainBlack'}
          bg_color={'mainGray'}
          onPress={() => dispatch(signOutAction())}
        />
      </View>
    </View>
  );
};

export default SettingsScreen;
