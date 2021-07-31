import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import BottomDrawer from '../Shared/BottomDrawers/GetStartedDrawer';
import styles from './styles';

const SignInScreen = () => {
  const [isModalShown, setisModalShown] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setisModalShown(true)}>
        <Text>Touch me</Text>
      </TouchableOpacity>
      {/*'Logo and text'*/}
      <BottomDrawer
        isModalShown={isModalShown}
        setisModalShown={setisModalShown}
      />
    </View>
  );
};

export default SignInScreen;
