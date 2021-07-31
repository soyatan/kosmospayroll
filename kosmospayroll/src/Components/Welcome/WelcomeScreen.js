import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import GetStartedDrawer from '../Shared/BottomDrawers/GetStartedDrawer/GetStartedDrawer';
import styles from './styles';
const WelcomeScreen = ({navigation}) => {
  const [isModalShown, setisModalShown] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
        <Text>Touch me</Text>
      </TouchableOpacity>
      {/*'Logo and text'*/}
      <GetStartedDrawer
        isModalShown={isModalShown}
        setisModalShown={setisModalShown}
      />
    </View>
  );
};

export default WelcomeScreen;
