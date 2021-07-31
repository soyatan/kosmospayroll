import React from 'react';

import {View, TextInput, Image} from 'react-native';

import styles from './styles';
import {TouchableIcon} from './../../../Assets/Svgs/touchableIcon';
import {Colors} from './../../../constants/Colors';
import {Icon} from './../../../Assets/Svgs/icon';

export default InputComponent = ({
  iconname,
  label,
  secureTextEntry,
  keyboardType,
  onEndEditing,
  state,
  onChangeText,
  iconOnPress,
}) => {
  return (
    <>
      <View style={styles.inputcontainer}>
        {iconname ? (
          <Icon name={iconname} scale={1} onPress={iconOnPress} />
        ) : null}
        <TextInput
          style={styles.textinput}
          label={label}
          placeholder={label}
          autoCorrect={false}
          autoCapitalize="none"
          placeholderTextColor={Colors.mainGray}
          selectionColor="blue"
          onChangeText={onChangeText}
          value={state}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          onEndEditing={onEndEditing}
        />
        {secureTextEntry ? (
          <TouchableIcon name={'hide'} scale={1} onPress={iconOnPress} />
        ) : null}
      </View>
    </>
  );
};
