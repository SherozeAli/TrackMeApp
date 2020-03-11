import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';

const Input = ({
  iconName,
  onChangeText,
  placeholder,
  value,
  secureTextEntry,
}) => {
  return (
    <View style={styles.container}>
      <Icon
        style={styles.iconStyling}
        name={iconName}
        size={verticalScale(20)}
        color="grey"
      />
      <TextInput
        style={styles.inputStyling}
        placeholder={placeholder}
        onChangeText={onChangeText}
        underlineColorAndroid="transparent"
        placeholderTextColor="grey"
        value={value}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default Input;
