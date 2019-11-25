import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    TextInput, 
    ImageBackground,
    Image,
    TouchableOpacity 
} from 'react-native';
import Colors from '../constants/Colors';
 

const HomePage = props => {
    return(
            <ImageBackground 
                blurRadius={1}
                source={require('../assets/king.png')} 
                style={styles.imageBackground}>
                <View style={{flexDirection: 'row'}}>
                    <Image style={{width: '45%',marginLeft: 10,marginRight: 10, resizeMode: 'contain', alignSelf: 'flex-start'}}
                        source={require('../assets/logo.png')}/>
                    <View style={styles.profile}>
                        <Image 
                            style={{width: 40, 
                                height: 40, 
                                backgroundColor: '#fff', 
                                borderRadius: 20,position: 'absolute', right: 20, top: 20}}
                            source={require('../assets/user.png')}/>
                        <View style={{position: 'absolute',bottom: 10, marginLeft: 10}}>
                            <Text 
                                style={{color: '#fff',  
                                    fontSize: 22}}>Welcome.</Text>
                            <Text 
                                style={{color: '#fff',  
                                    fontSize: 22,fontWeight: 'bold'}}>Vital Wi-fi!</Text>
                            </View>  
                        </View>
                    </View>
                
                <View style={styles.hotelStatus}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20}}>
                        <View>
                            <Text style={{color: '#fff'}}>check-in</Text>
                            <Text style={{color: '#fff', fontWeight: 'bold'}}>13/06</Text>
                        </View>
                        <Image 
                            source={require('../assets/forward.png')}/>
                        <View>
                            <Text style={{color: '#fff'}}>check-out</Text>
                            <Text style={{color: '#fff', fontWeight: 'bold'}}>25/06</Text>
                        </View>
                        <TouchableOpacity 
                            style={{width: '30%', justifyContent: 'center',alignItems: 'center', 
                                alignItems: 'center', height: 35, 
                                borderRadius: 20, backgroundColor: '#fff'}}>
                            <Text style={{fontWeight: 'bold'}}>Manage</Text>
                        </TouchableOpacity>
                    </View>
                   
                </View>
                <View style={styles.container1}>  
                    <TouchableOpacity style={styles.inputContainer}>
                        <Image 
                            style={{width: '50%',marginBottom: 10, resizeMode: 'contain'}}
                            source={require('../assets/internet.png')}/>

                        <Text 
                            style={{color: '#666666', fontWeight: 'bold', fontSize: 20}}>
                                Connectivity</Text>
                        
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.inputContainer} onPress={props.onSelect}>
                        <Image 
                            style={{width: '60%',marginBottom: 10, resizeMode: 'contain'}}
                            source={require('../assets/edit_user.png')}/>

                        <Text 
                            style={{color: '#666666', fontWeight: 'bold',marginTop: 10, fontSize: 20}}>
                                Update Profile</Text>
                
                    </TouchableOpacity>
                </View>

                <View style={styles.container2}>  
                    <TouchableOpacity style={styles.inputContainer}>
                        <Image 
                            style={{width: '50%',marginBottom: 10, resizeMode: 'contain'}}
                            source={require('../assets/survey.png')}/>

                        <Text 
                            style={{color: '#666666', fontWeight: 'bold', fontSize: 20}}>
                                Surveys</Text>
                        
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.inputContainer}>
                        <Image 
                            style={{width: '50%', resizeMode: 'contain'}}
                            source={require('../assets/wifi.png')}/>

                        <Text 
                            style={{color: '#666666', fontWeight: 'bold', fontSize: 20}}>
                                Wi-Fi</Text>
                        
                    </TouchableOpacity>
                </View>
                   
            </ImageBackground>
    );
};


const styles = StyleSheet.create({
    imageBackground:{
        width: '100%', 
        height: '100%'    
        
    },
    inputContainer: {
        width: '45%',
        height: '88%', 
        backgroundColor: '#fff',
        borderRadius: 10,
        margin: 10,
        padding: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 10,
        elevation: 3
    },
    container1: {
        flexDirection: 'row', 
        height: '25%',
        width: '100%',
    
    },
    container2: {
        flexDirection: 'row', 
        height: '25%',
        width: '100%'
    },
    hotelStatus: {
        backgroundColor: '#00000080',
        width: '95%',
        marginTop: -55,
        height: '15%', 
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 10
    },
    profile: {
        backgroundColor: '#00000080',
        width: '48%',
        marginTop: -40,
        height: '60%', 
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 10, 
        
    }
});

export default HomePage;