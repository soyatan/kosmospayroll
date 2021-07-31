import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import SigninDrawer from './../Shared/BottomDrawers/GetStartedDrawer/SigninDrawer';

const SignInScreen = ({navigation}) => {
  const [isModalShown, setisModalShown] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
        <Text>Touch me</Text>
      </TouchableOpacity>
      <Text style={styles.bigwhitetext}>Welcome! </Text>
      {/*'Logo and text'*/}
      <SigninDrawer
        isModalShown={isModalShown}
        setisModalShown={setisModalShown}
      />
    </View>
  );
};

export default SignInScreen;
