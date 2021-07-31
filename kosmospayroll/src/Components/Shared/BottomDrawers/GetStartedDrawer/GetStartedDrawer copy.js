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

  const snapPoints = useMemo(() => ['25%', '55%'], []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current.present();
  }, []);
  const handleSheetChanges = useCallback(index => {
    if (index === -1) {
      setisModalShown(false);
    }
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
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        handleComponent={() => null}>
        <View style={styles.contentContainer}>
          <TouchableOpacity style={styles.contentelement}>
            <Text>Report... </Text>
          </TouchableOpacity>
        </View>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

export default GetStartedDrawer;
