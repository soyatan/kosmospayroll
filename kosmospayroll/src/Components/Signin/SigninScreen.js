import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import SigninDrawer from './../Shared/BottomDrawers/GetStartedDrawer/SigninDrawer';

const SignInScreen = ({navigation}) => {
  const [isSignup, setisSignup] = useState(false);
  const [isModalShown, setisModalShown] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.welcometextcontainer}>
        {isSignup ? (
          <Text style={styles.bigwhitetext}>Register Now! </Text>
        ) : (
          <Text style={styles.bigwhitetext}>Welcome! </Text>
        )}
      </View>

      {/*'Logo and text'*/}
      <SigninDrawer
        isModalShown={isModalShown}
        setisModalShown={setisModalShown}
        isSignup={isSignup}
        setisSignup={setisSignup}
      />
    </View>
  );
};

export default SignInScreen;
