import {FormatMoney} from 'format-money-js';

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
  decimals: 2,
});
console.log(fm.from(123125.23813, {symbol: '$'}));
