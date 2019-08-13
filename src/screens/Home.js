import React from 'react';
import {
  View, Text, Image, ActivityIndicator, FlatList,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Spacer from '../components/Spacer';
import ListItem from '../components/ListItem';
// eslint-disable-next-line import/named
import { ApiServices } from '../services';

// Assets
const Logo = require('../assets/icon.png');

export default class Home extends React.Component {
  state = {
    fetching: true,
    start: 1,
    coins: [],
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    const { start, coins } = this.state;
    ApiServices.getCurrenciesDetails(start).then((res) => {
      this.setState({ fetching: false, coins: [...coins, ...res], start: start + 10 });
    }).catch(() => {
      this.setState({ fetching: false });
      Actions.splash();
    });
  }

  renderHeader() {
    return (
      <View style={styles.header}>
        <View>
          <Image
            source={Logo}
            style={styles.image}
          />
        </View>
        <Text style={styles.text}>
          {'CloseCross Market'}
        </Text>
      </View>
    );
  }

  render() {
    const { fetching, coins } = this.state;
    return (
      <View style={styles.container}>
        { fetching
          ? <ActivityIndicator size={28} color='#fff' />
          : (
            <View style={{ flex: 1, width: '100%' }}>
              {this.renderHeader()}
              <FlatList
                data={coins}
                keyExtractor={(i) => i.id.toString()}
                renderItem={(i) => ListItem(i)}
                ListFooterComponent={() => <Spacer h={20} />}
                onEndReached={this.getData}
                style={{ width: '100%', paddingHorizontal: 20 }}
              />
            </View>
          )}
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#2d3436',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 50,
    height: 50,
  },
  text: {
    fontFamily: 'Lato',
    color: '#fff',
    fontSize: 20,
    marginStart: 10,
  },
};
