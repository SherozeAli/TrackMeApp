import React, {Component, useState} from 'react';
import {View, StatusBar, Text} from 'react-native';
import Map from '../../../components/map/Map';
import {SafeAreaView} from 'react-navigation';
import styles from './styles';
import Input from '../../../components/input/Input';
import MyButton from '../../../components/button/MyButton';
import {
  primaryColor,
  white,
  black,
  pink,
  lightBlue,
} from '../../../config/typography/colors';

const TrackCreateScreen = () => {
  const [email, setEmail] = useState('');
  return (
    <SafeAreaView style={styles.container} forceInset={{top: 'always'}}>
      <StatusBar backgroundColor={primaryColor} barStyle="light-content" />
      <Map />

      <View style={styles.bottomContainer}>
        <Input
          iconName="edit"
          placeholder="Name for track"
          secureTextEntry={false}
          value={email}
          onChangeText={email => setEmail(email)}
        />
        <MyButton
          buttonText="Record"
          buttonColor={[pink]}
          onPress={() => signin({email, password})}
        />
      </View>
    </SafeAreaView>
  );
};

export default TrackCreateScreen;
