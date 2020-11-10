import { createSwitchNavigator } from 'react-navigation';
import AppTabNavigator from './AppTabNavigator';
import {screens} from '../screens/screens';
import AuthNavigator from './AuthNavigator'; 

const AppNavigator = createSwitchNavigator({
   //i commented the navigator for fast development of auth screens
    // [screens.MainApp]: AppTabNavigator,
    [screens.Auth]: AuthNavigator,
});

export default AppNavigator;