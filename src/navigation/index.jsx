import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AppNavigator from './AppNavigator';
import NavigationService from '../services/NavigationService';
import { screens } from '../screens/screens';
import CreatePostNavigator from './CreatePostNavigator';

const Stack = createStackNavigator(
    {
        [screens.CreatePostModal]: CreatePostNavigator,
        [screens.App]: AppNavigator,
    },
    {
        mode: 'modal',
        headerMode: 'none',
    },
);

const RootNavigator = createAppContainer(Stack);

export default () => (
    <RootNavigator ref={(ref) => NavigationService.init(ref)} />
);
