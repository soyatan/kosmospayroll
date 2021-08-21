import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import DateContainer from '../DateContainer/DateContainer';
import styles from './styles';
import DateTimePicker from '@react-native-community/datetimepicker';
const PaymentScreen = ({navigation, route}) => {
  const [paydate, setpaydate] = useState(new Date());
  const [showPay, setShowPay] = useState(false);
  console.log(route.params);
  const onChangeBD = (event, selectedDate) => {
    const currentDate = selectedDate || birthdate;
    setShowPay(Platform.OS === 'ios');
    setpaydate(currentDate);
  };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.balancerow}>
          <View style={styles.balanceitem}>
            <Text>Earnings</Text>
            <Text>12324.23</Text>
          </View>
          <View style={styles.balanceitem}>
            <Text>Payments</Text>
            <Text>12324.23</Text>
          </View>
          <View style={styles.balanceitem}>
            <Text>Balance</Text>
            <Text>12324.23</Text>
          </View>
        </View>
        <View style={styles.paymentlist}>
          <Text>Payments to date </Text>
          <Text>2 total</Text>
        </View>
        <View style={styles.addpaymentcontainer}>
          <Text>New Payment </Text>
          <View style={styles.addpaymentrow}>
            <View
              style={{
                alignSelf: 'flex-start',
                justifyContent: 'center',
                alignItems: 'stretch',
                marginLeft: 15,
                alignContent: 'stretch',
                width: '100%',
                height: '100%',
              }}>
              <Text
                style={{
                  flex: 1,
                  textAlignVertical: 'center',
                }}
                onPress={() => setShowPay(true)}>
                {paydate.toLocaleDateString('en-gb')}
              </Text>
            </View>
            {showPay && (
              <DateTimePicker
                testID="dateTimePicker"
                value={paydate}
                mode={'date'}
                is24Hour={true}
                display={'spinner'}
                onChange={onChangeBD}
              />
            )}
          </View>
        </View>
      </View>
    </>
  );
};

export default PaymentScreen;
