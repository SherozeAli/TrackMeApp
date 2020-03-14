import {View, Text} from 'react-native';
import React, {Component, useEffect, useContext} from 'react';
import {Context as AuthContext} from '../../context/AuthContext';

const Splash = () => {
  const {state, tryLocalSignin} = useContext(AuthContext);
  useEffect(() => {
    tryLocalSignin();
  }, []);
  return null;
};

export default Splash;
