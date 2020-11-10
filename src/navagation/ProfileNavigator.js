import { createStackNavigator } from 'react-navigation-stack';
import BrowseScreen from '../screens/Browse/BrowseScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import {screens} from '../screens/screens';

const ProfileNavigator = createStackNavigator({
    [screens.Profile]: ProfileScreen,
});

export default ProfileNavigator;