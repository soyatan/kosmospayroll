import React, {useCallback, useEffect, useMemo, useState, useRef} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import styles from './styles';
import RoundedButton from './../../Button/RoundedButton';

const GetStartedDrawer = ({isModalShown, setisModalShown, onPress}) => {
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

  const snapPoints = useMemo(() => ['0%', '35%'], []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current.present();
  }, []);

  function customBackground({pointerEvents, style}) {
    return <View style={[styles.container, style]} />;
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
          <Text style={styles.bigwhitetext}>Stay connected! </Text>
          <Text style={styles.blacktext}>Sign in with an account</Text>
          <View style={styles.getstartedbuttoncontainer}>
            <RoundedButton
              label={'Get Started  >'}
              bg_color={'mainPink'}
              text_color={'mainBlack'}
              onPress={onPress}
            />
          </View>
        </View>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

export default GetStartedDrawer;
