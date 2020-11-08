import { createBottomTabNavigator } from 'react-navigation-tabs';
import BrowseScreen from '../screens/Browse/BrowseScreen';
import {screens} from '../screens/screens';

const AppNavigator = createBottomTabNavigator({
    [screens.BrowseTab]: BrowseScreen,
    ["Lol"]: BrowseScreen,
});

export default AppNavigator;