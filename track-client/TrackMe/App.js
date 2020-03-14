import SigninScreen from './src/screens/signin/SigninScreen';
import SignupScreen from './src/screens/signup/SignupScreen';
import AccountScreen from './src/screens/signout/AccountScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import Splash from './src/screens/splash';
import {Provider as AuthProvider} from './src/context/AuthContext';
import React, {Component} from 'react';
TrackListScreen;
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {setNavigator} from './src/navigator/navigatorRef';

const switchNavigator = createSwitchNavigator({
  Splash: Splash,

  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen,
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetail: TrackDetailScreen,
    }),
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen,
  }),
});
const App = createAppContainer(switchNavigator);
export default () => {
  return (
    <AuthProvider>
      <App ref={navigator => setNavigator(navigator)} />
    </AuthProvider>
  );
};
