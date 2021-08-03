import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {TouchableIcon} from '../../Assets/Svgs/touchableIcon';
import ButtonWithText from '../Shared/Button/ButtonWithText';
import styles from './styles';
const WorkTypeFilterContainerSmall = ({selectedoption, onPress}) => {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          style={
            selectedoption === 'monthly'
              ? styles.worktype
              : [styles.worktype, {backgroundColor: 'transparent'}]
          }
          onPress={() => onPress('monthly')}>
          <Text
            style={
              selectedoption === 'monthly'
                ? [styles.whitetext, {color: 'white'}]
                : styles.whitetext
            }>
            Monthly
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onPress('daily')}
          style={
            selectedoption === 'daily'
              ? styles.worktype
              : [styles.worktype, {backgroundColor: 'transparent'}]
          }>
          <Text
            style={
              selectedoption === 'daily'
                ? [styles.whitetext, {color: 'white'}]
                : styles.whitetext
            }>
            Daily
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onPress('hourly')}
          style={
            selectedoption === 'hourly'
              ? styles.worktype
              : [styles.worktype, {backgroundColor: 'transparent'}]
          }>
          <Text
            style={
              selectedoption === 'hourly'
                ? [styles.whitetext, {color: 'white'}]
                : styles.whitetext
            }>
            Hourly
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default WorkTypeFilterContainerSmall;
