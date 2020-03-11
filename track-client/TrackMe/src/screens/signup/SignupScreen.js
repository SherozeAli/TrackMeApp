import React, {Component, useState} from 'react';
import {Text, ScrollView, View} from 'react-native';
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
const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <View style={styles.innerContainer}>
          <Text style={styles.text}>Signup</Text>
          <Input
            iconName="envelope"
            placeholder="E-mail address"
            secureTextEntry={false}
            value={email}
            onChangeText={email => setEmail(email)}
          />
          <Input
            iconName="lock"
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={password => setPassword(password)}
          />
          <MyButton
            buttonText="Signup"
            buttonColor={lightBlue}
            onPress={() => navigation.navigate('')}
          />
          <MyButton
            buttonText="Already have an account"
            buttonColor={pink}
            onPress={() => navigation.navigate('Signin')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

SignupScreen.navigationOptions = {
  headerShown: false,
};

export default SignupScreen;
