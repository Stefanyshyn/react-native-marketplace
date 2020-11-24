import React from 'react';
import { View } from 'react-native';
import s from './style';
import UserInfo from './UserInfo/UserInfo';
import OwnProduct from './OwnProduct/OwnProduct';

function ProfileScreen() {
    return (
        <View style={s.container}>
            <UserInfo />
            <OwnProduct />
        </View>
    );
}

export default ProfileScreen;
