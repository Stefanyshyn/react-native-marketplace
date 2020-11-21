import React from 'react';
import { BottomTabBar } from 'react-navigation-tabs';
import { screens } from '../../screens/screens';
import NavigationService from '../../services/NavigationService';

function CustomeTabBar({ ...props }) {
    function customeJumpToIndex({ route }) {
        if (route.key === screens.CreatePostTab) {
            NavigationService.navigate(screens.CreatePostModal);
        } else {
            props.jumpTo(route.key);
        }
    }
    return (
        <BottomTabBar {...props} onTabPress={customeJumpToIndex} />
    );
}
export default CustomeTabBar;
