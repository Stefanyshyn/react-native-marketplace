import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import BrowseNavigator from './BrowseNavigator';
import ProfileNavigator from './ProfileNavigator';
import { screens } from '../screens/screens';
import Icon from '../atom/Icon';
import s from './style';
import color from '../styles/color';
import CreatePostButton from './components/CreatePostButton';
import { Text, View } from 'react-native';
import CustomeTabBar from './components/CustomeTabBar';

const AppNavigator = createBottomTabNavigator(
    {
        [screens.BrowseTab]: {
            screen: BrowseNavigator,
            navigationOptions: {
                tabBarIcon: ({ focused }) => (
                    <Icon
                        name="browseTab"
                        color={focused ? color.primary : color.gray}
                    />
                ),
                tabBarLabel: ({ focused }) => (
                    <Text
                        style={[
                            focused ? s.tabActive : s.tabInactive,
                            s.center,
                        ]}
                    >
                        Browse
                    </Text>
                ),
            },
        },
        [screens.CreatePostTab]: {
            screen: () => <View></View>,
            navigationOptions: {
                tabBarIcon: <CreatePostButton />,
                tabBarLabel: () => null,
            },
        },
        [screens.ProfileTab]: {
            screen: ProfileNavigator,
            navigationOptions: {
                tabBarIcon: ({ focused }) => {
                    if (focused)
                        return <Icon name="bookmarkTabActive" />;
                    return <Icon name="bookmarkTabInactive" />;
                },
                tabBarLabel: ({ focused }) => (
                    <Text
                        style={[
                            focused ? s.tabActive : s.tabInactive,
                            s.center,
                        ]}
                    >
                        Profile
                    </Text>
                ),
            },
        },
    },
    {
        tabBarComponent: CustomeTabBar,
        initialRouteName: screens.ProfileTab,
    },
);

export default AppNavigator;
