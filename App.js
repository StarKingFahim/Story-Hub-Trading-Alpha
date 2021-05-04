import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import LoginScreen from './screens/LoginScreen';
import {BottomNavigator} from './Components.js/bottomNavigator';


export default function App() {
  return (
      <AppContainer/>
  );
}

 const SwitchNavigator = createSwitchNavigator({
     LoginScreen:LoginScreen,
  BottomNavigator:BottomNavigator,

  
 })

 	 const AppContainer = createAppContainer(SwitchNavigator);