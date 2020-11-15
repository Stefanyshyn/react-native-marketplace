import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from '../screens/Auth/Login/LoginScreen';
import RegisterScreen from '../screens/Auth/Register/RegisterScreen';
import {screens} from '../screens/screens';


const AuthNavigator = createStackNavigator({
    [screens.Register]: RegisterScreen,
    [screens.Login]: LoginScreen,
});

export default AuthNavigator;