import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Register from '../components/Register';


const RegisterScreen = props => {
    return<Register onSelect ={() => {
        props.navigation.navigate({routeName: 'Login'})
    }}/>;
};

RegisterScreen.navigationOptions = {
    headerTitle: "Register"
};
const styles = StyleSheet.create({});

export default RegisterScreen;