// react-native-maps.web.js
import React from 'react';
import { View, Text } from 'react-native';

const MapView = (props) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Map view is not supported on web.</Text>
  </View>
);

const Marker = () => null;

export { Marker };
export default MapView;
