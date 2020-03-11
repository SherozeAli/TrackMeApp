import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
const MyButton = ({buttonText, buttonColor}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.buttonContainer, {backgroundColor: buttonColor}]}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyButton;
