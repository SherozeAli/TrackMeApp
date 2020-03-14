import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import AsyncStorage from '@react-native-community/async-storage';
import {navigate} from '../navigator/navigatorRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return {...state, errorMessage: action.payload};
    case 'signup':
      return {errorMessage: '', token: action.payload};
    case 'signin':
      return {errorMessage: '', token: action.payload};
    case 'clear_error_message':
      return {...state, errorMessage: ''};
    case 'signout':
      return {token: null, errorMessage: ''};
    default:
      return state;
  }
};

const tryLocalSignin = dispatch => async () => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    dispatch({type: 'signin', payload: token});
    navigate('TrackList');
  } else {
    navigate('Signup');
  }
};

const clearErrorMessage = dispatch => () => {
  dispatch({type: 'clear_error_message'});
};

const signup = dispatch => async ({email, password}) => {
  try {
    const response = await trackerApi.post('/signup', {email, password});
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({type: 'signup', payload: response.data.token});
    navigate('mainFlow');
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with signup',
    });
    console.log(err.message);
  }
};
const signin = dispatch => {
  return async ({email, password}) => {
    try {
      const response = await trackerApi.post('/signin', {email, password});
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({type: 'signin', payload: response.data.token});
      navigate('TrackList');
    } catch (err) {
      dispatch({
        type: 'add_error',
        payload: 'Something went wrong with signin',
      });
      console.log(err.message);
    }
  };
};
const signout = dispatch => {
  return async () => {
    await AsyncStorage.removeItem('token');
    dispatch({type: 'signout'});
    navigate('loginFlow');
  };
};

export const {Provider, Context} = createDataContext(
  authReducer,
  {signup, signin, signout, clearErrorMessage, tryLocalSignin},
  {token: null, errorMessage: ''},
);
