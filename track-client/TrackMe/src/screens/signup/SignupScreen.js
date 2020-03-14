import React, {useEffect, useState, useContext} from 'react';
import {Text, ScrollView, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import Input from '../../components/input/Input';
import MyButton from '../../components/button/MyButton';
import {pink, lightBlue} from '../../config/typography/colors';
import {Context as AuthContext} from '../../context/AuthContext';
import {NavigationEvents} from 'react-navigation';

const SignupScreen = ({navigation}) => {
  const {state, signup, clearErrorMessage} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
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
          {state.errorMessage ? (
            <Text style={styles.errorText}>{state.errorMessage}</Text>
          ) : null}
          <MyButton
            buttonText="Signup"
            buttonColor={lightBlue}
            onPress={() => signup({email, password})}
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
