import React, {useCallback, useEffect, useMemo, useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  KeyboardAvoidingView,
} from 'react-native';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import styles from './styles';
import InputComponent from './../../Input/InputComponent';
import RoundedButton from './../../Button/RoundedButton';

const SigninDrawer = ({isModalShown, setisModalShown}) => {
  useEffect(() => {
    if (isModalShown) {
      handlePresentModalPress();
    }
  }, [isModalShown]);

  useEffect(() => {
    setTimeout(() => {
      setisModalShown(true);
    }, 1000);
  }, []);

  const bottomSheetModalRef = useRef(BottomSheetModal);

  const snapPoints = useMemo(() => ['0%', '65%'], []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current.present();
  }, []);

  function customBackground({pointerEvents, style}) {
    return <View style={[styles.signincontainer, style]} />;
  }
  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        backgroundComponent={customBackground}
        ref={bottomSheetModalRef}
        index={1}
        enableContentPanningGesture={false}
        snapPoints={snapPoints}
        handleComponent={() => null}>
        <View style={styles.contentContainer}>
          <Text style={styles.blacktext}>Email Address</Text>
          <InputComponent iconname={'envelope'} label={'Your Email'} />
          <Text style={styles.blacktext}>Password</Text>
          <InputComponent
            iconname={'padlock'}
            label={'Your Password'}
            secureTextEntry={true}
          />
          <TouchableOpacity>
            <Text style={styles.redtext}>Forgot password?</Text>
          </TouchableOpacity>
          <KeyboardAvoidingView
            enabled={true}
            style={styles.signinbuttonscontainer}>
            <RoundedButton
              label={'Sign In'}
              bg_color={'mainPink'}
              text_color={'mainBlack'}
            />
            <RoundedButton
              label={'Google Login'}
              bg_color={'blue'}
              text_color={'mainWhite'}
            />
            <RoundedButton
              label={'Sign Up'}
              bg_color={'mainLightGray'}
              text_color={'mainPink'}
            />
          </KeyboardAvoidingView>
        </View>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

export default SigninDrawer;
