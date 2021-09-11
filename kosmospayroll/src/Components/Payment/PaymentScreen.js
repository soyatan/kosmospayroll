import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import DateContainer from '../DateContainer/DateContainer';
import styles from './styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Icon} from '../../Assets/Svgs/icon';
import InputComponentCurrency from './../Shared/Input/InputComponentCuurrency';
import {findCurrencySymbol, formatCurrency} from '../../API/Helper';
import {useDispatch, useSelector} from 'react-redux';
import {userSelector} from '../../redux/userReducer';
import PaymentItem from '../PaymentItem/PaymentItem';
import NewPayment from '../PaymentItem/NewPayment';
import {
  addPayment,
  calculateTotalEarnings,
  calculateTotalPayments,
} from './../../API/dbfunctions';
import moment from 'moment';
import {employeesSelector} from './../../redux/employeesReducer';
import {employeeNameSelector} from '../../redux/employeeNameReducer';
const PaymentScreen = ({navigation, route}) => {
  const [paydate, setpaydate] = useState(new Date());
  const [showPay, setShowPay] = useState(false);
  const [paynote, setpaynote] = useState('');
  const [pay, setpay] = useState(0);
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  const [symbol, setsymbol] = useState('USD');
  const employee = useSelector(employeeNameSelector);

  const onChangeBD = (event, selectedDate) => {
    const currentDate = selectedDate || paydate;
    setShowPay(Platform.OS === 'ios');
    setpaydate(currentDate);
  };

  useEffect(() => {
    if (user) {
      setsymbol(findCurrencySymbol(user.currency));
    }
  }, []);
  const addPaymentToDB = () => {
    addPayment(
      user.userid,
      employee.key,
      moment.utc(paydate).valueOf(),
      pay,
      paynote,
      dispatch,
      navigation,
    );
  };

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
        <ScrollView style={styles.paymentscontainer}>
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
        </ScrollView>

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
