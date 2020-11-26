import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import s from './style';
import UserInfo from './UserInfo/UserInfo';
import OwnProduct from './OwnProduct/OwnProduct';
import { useStore } from '../../stores/createStore';
import { observer } from 'mobx-react';
import { getSnapshot } from 'mobx-state-tree';
import color from '../../styles/color';

function ProfileScreen() {
    const user = useStore((store) => store.viewer.user);
    if (!user)
        return (
            <View style={[s.container, s.loadingContainer]}>
                <ActivityIndicator
                    size="large"
                    color={color.primary}
                />
            </View>
        );

    return (
        <View style={s.container}>
            <UserInfo user={user} />
            <OwnProduct user={user} />
        </View>
    );
}

export default observer(ProfileScreen);
