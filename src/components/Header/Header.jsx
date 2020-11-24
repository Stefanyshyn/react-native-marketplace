import React from 'react';
import { View } from 'react-native';
import s from './style';

function Header({ children }) {
    return <View style={s.container}>{children}</View>;
}
export default Header;
