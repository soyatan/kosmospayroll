import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {TouchableIcon} from '../../Assets/Svgs/touchableIcon';
import ButtonWithText from '../Shared/Button/ButtonWithText';
import styles from './styles';
const WorkTypeFilterContainer = () => {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity style={styles.worktype}>
          <Text style={styles.whitetext}>Monthly</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.worktype}>
          <Text style={styles.whitetext}>Daily</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.worktype}>
          <Text style={styles.whitetext}>Hourly</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default WorkTypeFilterContainer;
