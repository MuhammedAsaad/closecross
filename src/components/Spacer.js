import React from 'react';
import { View } from 'react-native';

const Spacer = (props) => (
  // eslint-disable-next-line react/destructuring-assignment
  <View style={{ height: props.h || 0, width: props.w || 0 }} />
);

export default Spacer;
