import React from 'react';
import HomeScreen from "../screens/Home/HomeScreen";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const AppNavigator = createStackNavigator({
    Home: HomeScreen
})

export default createAppContainer(AppNavigator);