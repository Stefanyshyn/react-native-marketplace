import { Platform, StatusBar } from 'react-native';
import { isIphoneX } from 'react-native-iphone-x-helper';

const isAndroid = Platform.OS === 'android';
const iosStatusBarHeight = isIphoneX() ? 34 : 20;

export const statusBarHeight = isAndroid
    ? StatusBar.currentHeight
    : iosStatusBarHeight;
export const appBarHeight = isAndroid ? 56 : 44;
export const headerHeight = appBarHeight + statusBarHeight;
