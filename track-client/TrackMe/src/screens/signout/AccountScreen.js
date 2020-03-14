import React, {Component, useState, useContext} from 'react';
import {Text, ScrollView, StatusBar, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import Input from '../../components/input/Input';
import MyButton from '../../components/button/MyButton';
import {
  primaryColor,
  white,
  black,
  pink,
  lightBlue,
} from '../../config/typography/colors';
import {NavigationEvents, SafeAreaView} from 'react-navigation';
import {Context as AuthContext} from '../../context/AuthContext';

const AccountScreen = () => {
  const {state, signout} = useContext(AuthContext);
  return (
    <SafeAreaView forceInset={{top: 'always'}}>
      <Text>AccountScreen</Text>
      <MyButton buttonText="Logout" buttonColor={pink} onPress={signout} />
    </SafeAreaView>
  );
};

export default AccountScreen;
