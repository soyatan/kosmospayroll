import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {TouchableIcon} from '../../Assets/Svgs/touchableIcon';
import ButtonWithText from '../Shared/Button/ButtonWithText';
import styles from './styles';
const PendingContainer = ({onPress, globalBalance, isMinus}) => {
  return (
    <>
      <View style={styles.headeradditioncontainer}></View>
      <View elevation={5} style={styles.container}>
        <View style={styles.pendingleftcontainer}>
          <Text style={styles.headertext}>TOTAL PENDING</Text>
          <Text style={isMinus ? styles.greenmoneytext : styles.redmoneytext}>
            {globalBalance}
          </Text>
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
