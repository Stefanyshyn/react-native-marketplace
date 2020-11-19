import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import BrowseNavigator from './BrowseNavigator';
import ProfileNavigator from './ProfileNavigator';
import { screens } from '../screens/screens';
import Icon from '../atom/Icon'
import s from './style'

const AppNavigator = createBottomTabNavigator({
    [screens.ProfileTab]: {
        'screen': ProfileNavigator,
        navigationOptions:{
            tabBarIcon: ({focused})=>{
                if(focused)
                    return <Icon name="bookmarkTabActive"/>
                return <Icon name="bookmarkTabInactive"/>
            },
            tabBarLabel: ({focused})=>(
                <Text style={focused?s.tabActive:s.tabInactive}>Saved</Text>
            )
        },
    },
    [screens.BrowseTab]: BrowseNavigator,
});

export default AppNavigator;
