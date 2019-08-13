import React from 'react';
import { View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

// Assets
const Logo = require('../assets/icon.png');

export default class Splash extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      Actions.home();
    }, 2000);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={Logo}
            resizeMode="contain"
            style={styles.logoStyle}
          />
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#2d3436',
    alignItems: 'center',
  },
  logoContainer: {
    width: '20%',
    justifyContent: 'center',
  },
  logoStyle: {
    width: '100%',
    height: '100%',
    maxWidth: 250,
  },
};
