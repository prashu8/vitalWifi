import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HotelNavigator from './navigation/HotelNavigator';

export default function App() {
  return <HotelNavigator/>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
