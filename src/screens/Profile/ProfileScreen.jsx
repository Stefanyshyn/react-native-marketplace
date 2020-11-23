import React, { useCallback } from 'react';
import { Text, View } from 'react-native';
import Touchable from '../../components/Touchable/Touchable';
import s from './style';
import { useStore } from '../../stores/createStore';
import { observer } from 'mobx-react';
import { alert } from '../../utils/alert';
import NavigationService from '../../services/NavigationService';
import { screens } from '../screens';

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
            <Touchable onPress={onLogout}>
                <Text>Lol</Text>
            </Touchable>
        </View>
    );
}

export default observer(ProfileScreen);
