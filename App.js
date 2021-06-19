//import { StatusBar } from 'expo-status-bar';
//import React from 'react';
//import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import SignupScreen from './screens/SignupScreen';
import SigninScreen from './screens/SigninScreen';
import HomeScreen from './screens/HomeScreen';

const stackNavigator = createStackNavigator({
  Menu : SignupScreen,
  Signin : SigninScreen,
  Home : HomeScreen
});

const App = createAppContainer(stackNavigator);

export default App;


