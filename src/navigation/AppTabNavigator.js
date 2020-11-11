import { createBottomTabNavigator } from 'react-navigation-tabs';
import BrowseNavigator from "./BrowseNavigator";
import ProfileNavigator from "./ProfileNavigator";
import {screens} from '../screens/screens';

const AppNavigator = createBottomTabNavigator({
    [screens.BrowseTab]: BrowseNavigator,
    [screens.ProfileTab]: ProfileNavigator,
});

export default AppNavigator;