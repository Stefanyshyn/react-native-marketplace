import React from 'react';
import HomeScreen from "../screens/Home/HomeScreen";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import NavigationService from '../services/NavigationService';

const Stack = createStackNavigator({
    Home: HomeScreen
})
const RootNavigator = createAppContainer(Stack);

export default ()=>(
    <RootNavigator ref={ ref => NavigationService.init(ref)} />
)