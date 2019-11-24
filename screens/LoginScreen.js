import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    TextInput, 
    ImageBackground,
    Image,
    TouchableOpacity } from 'react-native';
import LoginPage from '../components/LoginPage';
 

const LoginScreen = props => {
    return<LoginPage 
        onHome={() => {
            props.navigation.navigate({routeName: 'Home'});
        }} 
        onSelect={() => {
            props.navigation.navigate({routeName: 'Register'});
        }}/>;
};

LoginScreen.navigationOptions = {
    header: null
  };


export default LoginScreen;