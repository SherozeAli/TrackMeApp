import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
const SignupScreen = ({navigation}) => {
  return (
    <View>
      <Text>SignupScreen</Text>
      <Button
        title="Got to Signin"
        onPress={() => navigation.navigate('Signin')}
      />
      <Button
        title="Got to Mainflow"
        onPress={() => navigation.navigate('mainFlow')}
      />
    </View>
  );
};

export default SignupScreen;
