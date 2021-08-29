import {FormatMoney} from 'format-money-js';
import {createNumberMask} from 'react-native-mask-input';
import {currencies} from './currencies';
import moment from 'moment';
export const checkAge = birthdate => {
  const brd = new Date(birthdate.toLocaleDateString());
  const now = Date.now();
  const milisecondspassed = now - brd;
  return milisecondspassed / (1000 * 60 * 60 * 24 * 365);
};

export const getMonthName = index => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return months[index];
};

export const generateFullDate = date => {
  const monthname = getMonthName(date.getMonth());
  const day = +1 + date.getDay();
  const year = date.getUTCFullYear();
  return `${day}-${monthname}-${year}`;
};

export const fm = new FormatMoney({
  decimals: 0,
});

export const findCurrencySymbol = code => {
  const currency = Object.values(currencies).find(item => item.code === code);
  return currency.symbol;
};

export const formatCurrency = (number, currencyCode) => {
  return fm.from(number, {symbol: `${findCurrencySymbol(currencyCode)} `});
};

export const CurrencyMask = symbol => {
  return createNumberMask({
    prefix: [symbol, ' '],
    delimiter: ',',
    separator: '.',
    precision: 2,
  });
};
export const PhoneMask = [
  '(',
  /\d/, // that's because I want it to be a digit (0-9)
  /\d/,
  ')',
  ' ',
  /\d/,
  /\d/,
  /\d/,
  ' ',
  /\d/,
  /\d/,
  /\d/,
  ' ',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  ' ',
];

export const addNumbers = (a, b) => {
  return a + b;
};
