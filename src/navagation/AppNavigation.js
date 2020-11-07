import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/Home/HomeScreen';
import {screens} from '../screens/screens';


const AppNavigator = createStackNavigator({
    [screens.Home]: HomeScreen,
});

export default AppNavigator;