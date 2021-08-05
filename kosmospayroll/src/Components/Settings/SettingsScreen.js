import React, {useState, useRef} from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {signOutAction, userSelector} from '../../redux/userReducer';
import styles from './styles';
import {Picker} from '@react-native-picker/picker';
import {currencies} from '../../API/currencies';
import RoundedButton from './../Shared/Button/RoundedButton';
import {addCurrency} from '../../API/dbfunctions';

const SettingsScreen = ({navigation}) => {
  const user = useSelector(userSelector);
  const [currency, setcurrency] = useState('USD');
  const [modalVisible, setmodalVisible] = useState(false);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modal}>
          <Text style={styles.blacktext}>Default currency selected</Text>
          <Text style={styles.blacktext}>{currency}</Text>
          <View style={styles.modalbutton}>
            <RoundedButton
              label={'Confirm'}
              text_color={'mainBlack'}
              bg_color={'mainPink'}
              onPress={() => addCurrency(dispatch, currency, user.userid)}
            />
          </View>
          <View style={styles.modalbutton}>
            <RoundedButton
              label={'Go Back'}
              text_color={'mainBlack'}
              bg_color={'mainGray'}
              onPress={() => setmodalVisible(false)}
            />
            <Text style={styles.shadytext}>*Can not be changed later</Text>
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
      {!user.currency ? (
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
