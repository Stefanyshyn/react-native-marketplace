import { createStackNavigator } from 'react-navigation-stack';
import BrowseScreen from '../screens/Browse/BrowseScreen';
import {screens} from '../screens/screens';

const BrowseNavigator = createStackNavigator({
    [screens.Browse]: BrowseScreen,
});

export default BrowseNavigator;