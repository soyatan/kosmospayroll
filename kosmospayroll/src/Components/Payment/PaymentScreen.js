import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import DateContainer from '../DateContainer/DateContainer';
import styles from './styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Icon} from '../../Assets/Svgs/icon';
import InputComponentCurrency from './../Shared/Input/InputComponentCuurrency';
import {findCurrencySymbol} from '../../API/Helper';
import {useSelector} from 'react-redux';
import {userSelector} from '../../redux/userReducer';
import PaymentItem from '../PaymentItem/PaymentItem';
import NewPayment from '../PaymentItem/NewPayment';
import {addPayment} from './../../API/dbfunctions';
const PaymentScreen = ({navigation, route}) => {
  const [paydate, setpaydate] = useState(new Date());
  const [showPay, setShowPay] = useState(false);
  const [paynote, setpaynote] = useState('');
  const [pay, setpay] = useState(0);
  const {employee} = route.params;
  const user = useSelector(userSelector);
  const symbol = findCurrencySymbol(user.currency);
  const onChangeBD = (event, selectedDate) => {
    const currentDate = selectedDate || paydate;
    setShowPay(Platform.OS === 'ios');
    setpaydate(currentDate);
  };

  const addPaymentToDB = () => {
    addPayment(user.userid, employee.key, Date.now(), pay, paynote);
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
        <View style={styles.paymentscontainer}>
          <PaymentItem />
          <NewPayment
            pay={pay}
            paydate={paydate}
            setpaydate={setpaydate}
            setpay={setpay}
            setShowPay={setShowPay}
            symbol={symbol}
            paynote={paynote}
            setpaynote={setpaynote}
            onPress={() => addPaymentToDB()}
          />
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
    </>
  );
};

export default PaymentScreen;
