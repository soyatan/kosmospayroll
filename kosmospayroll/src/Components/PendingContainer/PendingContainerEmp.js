import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import {TouchableIcon} from '../../Assets/Svgs/touchableIcon';
import ButtonWithText from '../Shared/Button/ButtonWithText';
import styles from './styles';
const PendingContainerEmp = ({onPress, totalPending}) => {
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    if (totalPending) {
      setisLoading(false);
    }
  }, [totalPending]);
  return (
    <>
      <View style={styles.headeradditioncontainer}></View>
      <View style={styles.container}>
        <View style={styles.pendingleftcontainer}>
          <Text>TOTAL PENDING</Text>

          {isLoading ? (
            <ActivityIndicator
              size="small"
              color="white"
              style={{alignSelf: 'center', paddingLeft: 40}}
            />
          ) : (
            <Text>{totalPending}</Text>
          )}
        </View>
        <View style={styles.pendingrightcontainer}>
          <ButtonWithText
            name={'dollar'}
            scale={1}
            label={'ADD PAYMENT'}
            onPress={onPress}
          />
        </View>
      </View>
    </>
  );
};

export default PendingContainerEmp;
