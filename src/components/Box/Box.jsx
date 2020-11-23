import React from 'react';
import { Text } from 'react-native';
import s from './style';
const Box = ({ text, type, style }) => (
    <Text style={[s[type], s.container, style]}>{text}</Text>
);
export default Box;
