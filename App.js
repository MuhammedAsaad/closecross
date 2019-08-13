import React from 'react';
import { View, StatusBar } from 'react-native';
import { Router, Stack, Scene } from 'react-native-router-flux';
// Screens
import Splash from './src/screens/Splash';
import Home from './src/screens/Home';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor='#292c2d' barStyle='light-content' />
        <Router>
          <Stack key="root">
            <Scene hideNavBar key='splash' component={Splash} initial />
            <Scene hideNavBar key='home' component={Home} />
          </Stack>
        </Router>
      </View>
    );
  }
}
