import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {TouchableIcon} from '../../Assets/Svgs/touchableIcon';
import ButtonWithText from '../Shared/Button/ButtonWithText';
import styles from './styles';
const PendingContainer = ({onPress}) => {
  return (
    <>
      <View style={styles.headeradditioncontainer}></View>
      <View style={styles.container}>
        <View style={styles.pendingleftcontainer}>
          <Text>TOTAL PENDING</Text>
          <Text>$1235.84</Text>
        </View>
        <View style={styles.pendingrightcontainer}>
          <ButtonWithText
            name={'add_user'}
            scale={1}
            label={'NEW EMPLOYEE'}
            onPress={onPress}
          />
        </View>
      </View>
    </>
  );
};

export default PendingContainer;
