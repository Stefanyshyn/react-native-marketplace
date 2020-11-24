import { StatusBar } from 'expo-status-bar';

const { Platform } = require('react-native');

const isAndroid = Platform.OS === 'android';
const iosStatusBarHeight = isIphoneX() ? 34 : 20;

export const statusBarHeight = isAndroid
    ? StatusBar.currentHeight
    : iosStatusBarHeight;
export const appBarHeight = isAndroid ? 56 : 44;
export const headerHeight = appBarHeight + statusBarHeight;
