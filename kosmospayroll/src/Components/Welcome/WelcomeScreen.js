import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import GetStartedDrawer from '../Shared/BottomDrawers/GetStartedDrawer/GetStartedDrawer';
import styles from './styles';
const WelcomeScreen = ({navigation}) => {
  const [isModalShown, setisModalShown] = useState(false);

  return (
    <View style={styles.container}>
      {/*'Logo and text'*/}
      <GetStartedDrawer
        isModalShown={isModalShown}
        setisModalShown={setisModalShown}
        onPress={() => navigation.navigate('Signin')}
      />
    </View>
  );
};

export default WelcomeScreen;
