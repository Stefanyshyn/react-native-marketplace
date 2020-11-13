import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import BrowseNavigator from "./BrowseNavigator";
import ProfileNavigator from "./ProfileNavigator";
import {screens} from '../screens/screens';
import { observer } from 'mobx-react';

export const PrivateNavigation = observer(function({component: Component, ...props}) {
    const isLoggedIn = useStore(store=> store.auth.isLoggedIn);

    if(isLoggedIn){
        return <Component {...props}></Component>
    }else 
    return <BrowseScreen {...props}></BrowseScreen>
});

const AppNavigator = createBottomTabNavigator({
    [screens.ProfileTab]: ProfileNavigator,
    [screens.BrowseTab]: BrowseNavigator,
});

export default AppNavigator;