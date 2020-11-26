import { createStackNavigator } from 'react-navigation-stack';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import { screens } from '../screens/screens';
import SettingScreen from '../screens/Setting/SettingScreen';

const ProfileNavigator = createStackNavigator({
    [screens.Profile]: ProfileScreen,
    [screens.Setting]: SettingScreen,
});

export default ProfileNavigator;
