import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import DateContainer from '../DateContainer/DateContainer';
import styles from './styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Icon} from '../../Assets/Svgs/icon';
import InputComponentCurrency from './../Shared/Input/InputComponentCuurrency';
import {findCurrencySymbol, formatCurrency} from '../../API/Helper';
import {useSelector} from 'react-redux';
import {userSelector} from '../../redux/userReducer';
import PaymentItem from '../PaymentItem/PaymentItem';
import NewPayment from '../PaymentItem/NewPayment';
import {
  addPayment,
  calculateTotalEarnings,
  calculateTotalPayments,
} from './../../API/dbfunctions';
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
  console.log(employee.payments);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.balancerow}>
          <View style={styles.balanceitem}>
            <Text>Earnings</Text>
            <Text>
              {formatCurrency(
                calculateTotalEarnings(employee).normalpay +
                  calculateTotalEarnings(employee).overtimepay,
                employee.currency,
              )}
            </Text>
          </View>
          <View style={styles.balanceitem}>
            <Text>Payments</Text>
            <Text>
              {formatCurrency(
                calculateTotalPayments(employee),
                employee.currency,
              )}
            </Text>
          </View>
          <View style={styles.balanceitem}>
            <Text>Balance</Text>
            <Text>
              {formatCurrency(
                calculateTotalEarnings(employee).normalpay +
                  calculateTotalEarnings(employee).overtimepay -
                  calculateTotalPayments(employee),
                employee.currency,
              )}
            </Text>
          </View>
        </View>
        <View style={styles.paymentlist}>
          <Text>Payments to date </Text>
          {employee.payments ? (
            <Text>{`${Object.keys(employee.payments).length} Total`}</Text>
          ) : (
            <Text>0 Total</Text>
          )}
        </View>
        <View style={styles.paymentscontainer}>
          {employee.payments
            ? Object.keys(employee.payments).map(paymentid => {
                return (
                  <PaymentItem
                    key={paymentid}
                    item={employee.payments[paymentid]}
                    currency={user.currency}
                  />
                );
              })
            : null}

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
