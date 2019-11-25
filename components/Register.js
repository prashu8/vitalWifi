import React from 'react';
import { View, Text, StyleSheet,Image,TouchableOpacity, ImageBackground, TextInput } from 'react-native';



const Register = props => {
    return(
        <View style={styles.screen}>
            <ImageBackground 
                blurRadius={3}
                source={require('../assets/v.png')} 
                style={styles.imageBackground}>

                <TextInput 
                    placeholder="First Name" 
                    style={styles.textInput}/>

                <TextInput 
                    placeholder="Last Name" 
                    style={styles.textInput}/>

                <TextInput 
                    placeholder="Email" 
                    style={styles.textInput}/>

                <TextInput 
                    placeholder="Password"
                    secureTextEntry={true}  
                    style={styles.textInput}/>

                <TextInput 
                    placeholder="Mobile" 
                    style={styles.textInput}/>

                <TextInput 
                    placeholder="Username" 
                    style={styles.textInput}/>

                <TouchableOpacity onPress={props.onHome} style={styles.button}>
                    <Text 
                        style={{color: '#fff',fontWeight: 'bold'}}>Sign In</Text>
                </TouchableOpacity>

               

                <View 
                    style={styles.bottomView}>
                    <Text 
                        style={{color: '#fff'}}>
                           Have An Account?</Text>
                    <TouchableOpacity onPress={props.onSelect}>
                        <Text 
                            style={{color: '#fff', fontWeight: 'bold'}}> Sign In</Text>
                    </TouchableOpacity>
                </View>


            </ImageBackground>
        </View>
    );
};

Register.navigationOptions = {
    headerTiltle: 'Register'
};
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageBackground:{
        width: '100%', 
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        width: '80%',
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
        color: '#fff', 
        marginVertical: 10,
        fontWeight: 'bold'
    },
    button: {
        width: '80%',
        height: 40,
        borderRadius: 10,
        textAlign: 'center',
        color: '#fff', 
        marginVertical: 10,
        backgroundColor: '#42BDAF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    account: {
        width: '80%',
        height: 40,
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 50,
        textAlign: 'center',
        color: '#fff', 
        marginVertical: 10,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomView: {
        flexDirection: 'row',
        marginBottom: 10, 
        position: 'absolute',
        bottom: 5
    }
});

export default Register;