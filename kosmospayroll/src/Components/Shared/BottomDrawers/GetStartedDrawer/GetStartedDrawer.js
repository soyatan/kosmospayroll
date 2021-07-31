import React, {useCallback, useEffect, useMemo, useState, useRef} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import styles from './styles';

const GetStartedDrawer = ({isModalShown, setisModalShown}) => {
  useEffect(() => {
    if (isModalShown) {
      handlePresentModalPress();
    } else {
      bottomSheetModalRef.current?.close();
    }
  }, [isModalShown]);

  const bottomSheetModalRef = useRef(BottomSheetModal);

  const snapPoints = useMemo(() => ['25%', '35%'], []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback(index => {
    if (index === -1) {
      setisModalShown(false);
    }
  }, []);

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}>
        <View style={styles.contentContainer}>
          <TouchableOpacity style={styles.contentelement}>
            <Text>Report... </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contentelement}>
            <Text>Turn on Post Notifications </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contentelement}>
            <Text>Share to... </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contentelement}>
            <Text>Unfollow </Text>
          </TouchableOpacity>
        </View>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

export default GetStartedDrawer;
