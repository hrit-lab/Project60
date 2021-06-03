import * as React from 'react';
import { Text, View, StyleSheet, Button} from 'react-native';
import HomeScreen from './screns/HomeScreen'
import SummaryScreen from './screns/SummaryScreen'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

export default class App extends React.Component{
  render(){
    return(
      <View>
      <AppContainer />
      </View>
    )
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
  SummaryScreen : SummaryScreen
})

const AppContainer = createAppContainer(AppNavigator);