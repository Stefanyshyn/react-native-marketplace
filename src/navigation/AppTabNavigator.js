import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import BrowseNavigator from './BrowseNavigator';
import ProfileNavigator from './ProfileNavigator';
import { screens } from '../screens/screens';
import { observer } from 'mobx-react';

const AppNavigator = createBottomTabNavigator({
    [screens.ProfileTab]: {
        'screen': ProfileNavigator,
        
    },
    [screens.BrowseTab]: BrowseNavigator,
});

export default AppNavigator;
