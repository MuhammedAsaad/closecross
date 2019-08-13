import React from 'react';
import { View, Text } from 'react-native';
import moment from 'moment';

const ListItem = (item) => (
  <View style={styles.dataContainer}>
    <View style={{ flex: 2, flexDirection: 'row', alignItems: 'center' }}>
      <Text style={{ ...styles.text, ...styles.rankText, backgroundColor: item.item.tags[0] === 'mineable' ? '#2ecc71' : '#e74c3c' }}>
        {item.item.cmc_rank}
      </Text>
      <Text style={{ ...styles.text, marginStart: 5 }}>
        {item.item.name}
      </Text>
    </View>
    <View style={{ marginEnd: 30 }}>
      <Text style={{ ...styles.text, fontSize: 18 }}>
        {`${item.item.quote.USD.price.toFixed(2)}$`}
      </Text>
    </View>
    <View>
      <Text style={{ ...styles.text, color: '#ccc' }}>
        {`${moment(item.item.last_updated).format('YYYY-MM-DD')}\n${moment(item.item.last_updated).format('hh:mm:ssA')}`}
      </Text>
    </View>
  </View>
);

const styles = {
  dataContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#777',
  },
  text: {
    color: '#fff',
    fontFamily: 'Lato',
  },
  rankText: {
    width: 30,
    height: 30,
    borderRadius: 15,
    textAlign: 'center',
    textAlignVertical: 'center',
    margin: 5,
    elevation: 2,
  },
};

export default ListItem;
