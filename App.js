import React from 'react';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';




export default class App extends React.Component {
  render() {
    return(
      <HomeScreen />
    )
  }
}