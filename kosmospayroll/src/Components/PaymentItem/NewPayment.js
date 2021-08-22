import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {TouchableIcon} from '../../Assets/Svgs/touchableIcon';
import InputComponentCuurrencyS from '../Shared/Input/InputComponentCuurrencyS';

import styles from './styles';
const NewPayment = ({
  pay,
  setpaydate,
  paydate,
  setpay,
  setShowPay,
  symbol,
  setpaynote,
  paynote,
  onPress,
}) => {
  const [isValidRate, setisValidRate] = useState(false);
  const validatePay = () => {
    const pattern = /^[+-]?((\.\d+)|(\d+(\.\d+)?))$/;

    if (pattern.test(pay)) {
      setisValidRate(true);
    } else {
      setisValidRate(false);
    }
  };
  return (
    <>
      <View style={styles.bigcontainer}>
        <View style={styles.leftcontainer}>
          <Text style={styles.blacktext}>Date</Text>
          <View style={styles.dateinput}>
            <Text
              style={{
                flex: 1,
                textAlignVertical: 'center',
              }}
              onPress={() => setShowPay(true)}>
              {paydate.toLocaleDateString('en-gb')}
            </Text>
          </View>
        </View>
        <View style={styles.newrightcontainer}>
          <View
            style={[
              styles.newinsidecontainer,
              {borderRightWidth: 1, flex: 1.2, marginRight: 10},
            ]}>
            <Text style={styles.blacktext}>Payment Note </Text>
            <TextInput
              style={styles.textinput}
              label={'Note...'}
              placeholder={'Note...'}
              onChangeText={setpaynote}
              value={paynote}
            />
          </View>
          <View style={styles.newinsidecontainer}>
            <Text style={styles.blacktext}>Amount </Text>
            <InputComponentCuurrencyS
              state={pay}
              onChangeText={setpay}
              label={'Add Payment'}
              keyboardType={'numeric'}
              onEndEditing={validatePay}
              prefix={`${symbol} `}
            />
          </View>
          <View style={{width: 30}}>
            <TouchableIcon name={'add'} scale={1} onPress={onPress} />
          </View>
        </View>
      </View>
    </>
  );
};

export default NewPayment;
