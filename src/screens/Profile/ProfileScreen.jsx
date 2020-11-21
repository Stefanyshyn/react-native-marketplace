import React, { useCallback } from 'react';
import { Text, View } from 'react-native';
import Touchable from '../../components/Touchable/Touchable';
import s from './style';
import { useStore } from '../../stores/createStore';
import { observer } from 'mobx-react';
import { alert } from '../../utils/alert';
import NavigationService from '../../services/NavigationService';
import { screens } from '../screens';
import { StyleSheet } from 'react-native';
const ss=  StyleSheet.create({
    c: {
        position: 'absolute',
        
    },
    w: {
        color: color.white,
        fontWeight: '500',
    },
});

function ProfileScreen() {
    const store = useStore();
    const onLogout = useCallback(() => {
        store.auth.logoutFlow
            .run()
            .then(() => {
                NavigationService.navigate(screens.Auth);
            })
            .catch((err) => alert(err));
    }, []);
    const { isLoggedIn } = store.auth;
    return (
        <View style={s.container}>
            <View style={s.c}>
            <View style={s.w}>
                <Touchable onPress={console.log('lol')}>
                    <Text>Lol</Text>
                </Touchable>
                
                </View>
                </View>
        </View>
    );
}

export default observer(ProfileScreen);
