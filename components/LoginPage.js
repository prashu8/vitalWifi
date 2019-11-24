import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    TextInput, 
    ImageBackground,
    Image,
    TouchableOpacity } from 'react-native';
 

const LoginPage = props => {
    return(
        <View style={styles.screen}>
            <ImageBackground 
                blurRadius={1}
                source={require('../assets/background.png')} 
                style={styles.imageBackground}>

                <Image style={{width: '80%', resizeMode: 'contain'}}
                    source={require('../assets/logo.png')}/>

                <TextInput 
                    placeholder="Email" 
                    style={styles.textInput}/>

                <TextInput 
                    placeholder="Password" 
                    secureTextEntry={true} 
                    style={styles.textInput}/>

                <TouchableOpacity onPress={props.onHome} style={styles.button}>
                    <Text 
                        style={{color: '#fff',fontWeight: 'bold'}}>Sign In</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text 
                        style={{color: '#fff', marginVertical: 10}}>
                            Forgot Password?</Text>
                </TouchableOpacity>


                <View 
                    style={styles.bottomView}>
                    <Text 
                        style={{color: '#fff'}}>
                            Don't Have An Account?</Text>
                    <TouchableOpacity onPress={props.onSelect}>
                        <Text 
                            style={{color: '#fff', fontWeight: 'bold'}}> Sign Up</Text>
                    </TouchableOpacity>
                </View>


            </ImageBackground>
        </View>
    );
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
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 50,
        textAlign: 'center',
        color: '#fff', 
        marginVertical: 10,
        fontWeight: 'bold'
    },
    button: {
        width: '80%',
        height: 40,
        borderRadius: 50,
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

export default LoginPage;