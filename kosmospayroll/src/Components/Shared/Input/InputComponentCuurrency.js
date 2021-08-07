import React, {useState} from 'react';

import {View, TextInput, Image} from 'react-native';

import styles from './styles';
import {TouchableIcon} from '../../../Assets/Svgs/touchableIcon';
import {Colors} from '../../../constants/Colors';
import {Icon} from '../../../Assets/Svgs/icon';
import CurrencyInput from 'react-native-currency-input';

export default InputComponentCurrency = ({
  label,
  secureTextEntry,
  keyboardType,
  onEndEditing,
  state,
  onChangeText,
  iconOnPress,
  mask,
  prefix,
}) => {
  const [value, setvalue] = useState(null);
  return (
    <>
      <View style={styles.borderlessinput}>
        <CurrencyInput
          style={styles.textinput}
          label={label}
          autoCorrect={false}
          autoCapitalize="none"
          placeholderTextColor={Colors.mainGray}
          selectionColor="blue"
          onChangeText={formattedValue => {
            //onChangeText(formattedValue);
          }}
          onChangeValue={onChangeText}
          value={state}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          onEndEditing={onEndEditing}
          prefix={prefix}
          delimiter=","
          separator="."
          precision={2}
        />
        {secureTextEntry ? (
          <TouchableIcon name={'hide'} scale={1} onPress={iconOnPress} />
        ) : null}
      </View>
    </>
  );
};
