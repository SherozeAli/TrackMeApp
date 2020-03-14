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
import {NavigationEvents} from 'react-navigation';
import {Context as AuthContext} from '../../context/AuthContext';

const SigninScreen = ({navigation}) => {
  const {state, signin, clearErrorMessage} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={primaryColor} barStyle="light-content" />
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <View style={styles.innerContainer}>
          <Text style={styles.text}>Login</Text>
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
          {state.errorMessage ? (
            <Text style={styles.errorText}>{state.errorMessage}</Text>
          ) : null}
          <MyButton
            buttonText="Login"
            buttonColor={lightBlue}
            onPress={() => signin({email, password})}
          />
          <MyButton
            buttonText="Register new account"
            buttonColor={pink}
            onPress={() => navigation.navigate('Signup')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

SigninScreen.navigationOptions = {
  headerShown: false,
};
export default SigninScreen;
