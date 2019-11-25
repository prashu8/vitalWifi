import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from '../screens/LoginScreen';
import MainScreen from '../screens/MainScreen';
import RegisterScreen from '../screens/RegisterScreen';
import Colors from '../constants/Colors';


const MainNavigator = createStackNavigator({
    Login: LoginScreen,
    Home: MainScreen,
    Register: RegisterScreen
},
{
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor:  '#1D0B44'
    },
    headerTintColor: 'white' 
  }
});

export default createAppContainer(MainNavigator);