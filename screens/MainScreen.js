import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HomePage from '../components/HomePage';
 

const MainScreen = props => {
    return<HomePage/>;
};

MainScreen.navigationOptions = {
    header: null
}

const styles = StyleSheet.create({});

export default MainScreen;