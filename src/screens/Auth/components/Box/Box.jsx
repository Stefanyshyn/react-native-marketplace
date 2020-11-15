import React from 'react';
import { Text } from 'react-native';
import s from './style';
const Box = ({text, type})=>(

    <Text style={[s[type], s.container]} >{text}</Text>
)
export default Box;