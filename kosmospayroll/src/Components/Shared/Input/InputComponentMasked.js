import React from 'react';

import {View, TextInput, Image} from 'react-native';

import styles from './styles';
import {TouchableIcon} from '../../../Assets/Svgs/touchableIcon';
import {Colors} from '../../../constants/Colors';
import {Icon} from '../../../Assets/Svgs/icon';
import MaskInput, {Masks} from 'react-native-mask-input';

export default InputComponentMasked = ({
  label,
  secureTextEntry,
  keyboardType,
  onEndEditing,
  state,
  onChangeText,
  iconOnPress,
  mask,
}) => {
  return (
    <>
      <View style={styles.borderlessinput}>
        <MaskInput
          style={styles.textinput}
          label={label}
          autoCorrect={false}
          autoCapitalize="none"
          placeholderTextColor={Colors.mainGray}
          selectionColor="blue"
          onChangeText={(masked, unmasked, obfuscated) => {
            onChangeText(unmasked); // you can use the unmasked value as well

            // assuming you typed "9" all the way:
            console.log(masked); // (99) 99999-9999
            console.log(unmasked); // 99999999999
            console.log(obfuscated); // (99) 99999-9999 (there's no obfuscation on this mask example)
          }}
          value={state.toString()}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          onEndEditing={onEndEditing}
          mask={mask}
        />
        {secureTextEntry ? (
          <TouchableIcon name={'hide'} scale={1} onPress={iconOnPress} />
        ) : null}
      </View>
    </>
  );
};
