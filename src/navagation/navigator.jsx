import React from 'react';
import HomeScreen from "../screens/Home/HomeScreen";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import NavigationService from '../services/NavigationService';
import { screens } from '../screens/screens';
import AuthNavigator from './AuthNavigation';
import AppNavigator from './AppNavigation';

const Stack = createSwitchNavigator({
    [screens.MainApp]: AppNavigator,
    [screens.Auth]: AuthNavigator,

})
const RootNavigator = createAppContainer(Stack);

export default ()=>(
    <RootNavigator ref={ ref => NavigationService.init(ref)} />
)