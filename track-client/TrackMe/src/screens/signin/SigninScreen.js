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

const SigninScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
        }}
        style={styles.innerContainer}>
        <View style={{width: '100%'}}>
          <Text style={styles.text}>SigninScreen</Text>
          <Input
            iconName="user"
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
          <MyButton buttonText="Login" buttonColor={lightBlue} />
          <MyButton buttonText="Register new account" buttonColor={pink} />
        </View>
      </ScrollView>
    </View>
  );
};

export default SigninScreen;
