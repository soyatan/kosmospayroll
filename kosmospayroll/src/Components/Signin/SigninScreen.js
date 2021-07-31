import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import SigninDrawer from './../Shared/BottomDrawers/GetStartedDrawer/SigninDrawer';

const SignInScreen = ({navigation}) => {
  const [isModalShown, setisModalShown] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.welcometextcontainer}>
        <Text style={styles.bigwhitetext}>Welcome! </Text>
      </View>

      {/*'Logo and text'*/}
      <SigninDrawer
        isModalShown={isModalShown}
        setisModalShown={setisModalShown}
      />
    </View>
  );
};

export default SignInScreen;
