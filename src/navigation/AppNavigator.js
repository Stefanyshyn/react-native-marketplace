import { createSwitchNavigator } from 'react-navigation';
import AppTabNavigator from './AppTabNavigator';
import {screens} from '../screens/screens';
import AuthNavigator from './AuthNavigator'; 

const AppNavigator = createSwitchNavigator({
    [screens.Auth]: AuthNavigator,
    [screens.MainApp]: AppTabNavigator,
});

export default AppNavigator;