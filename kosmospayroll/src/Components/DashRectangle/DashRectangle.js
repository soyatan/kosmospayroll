import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import {fetchEmployees} from '../../API/dbfunctions';
import styles from './styles';

const DashRectangle = ({color}) => {
  return <View style={[styles.container, {backgroundColor: color}]}></View>;
};

export default DashRectangle;
