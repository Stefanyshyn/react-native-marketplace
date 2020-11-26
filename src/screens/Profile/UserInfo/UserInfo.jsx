import React, { useCallback } from 'react';
import { Image, Text, View } from 'react-native';
import { observer } from 'mobx-react';
import { AntDesign } from '@expo/vector-icons';
import s from './style';
import Touchable from '../../../components/Touchable/Touchable';
import NavigationService from '../../../services/NavigationService';
import { screens } from '../../screens';

function UserInfo({ user }) {
    const toSettingScreen = useCallback(()=>{
        NavigationService.navigate(screens.Setting)
    },[])
    return (
        <View style={s.container}>
            <View style={s.avatarWrapper}>
                <Image
                    style={s.avatar}
                    source={{ uri: user.avatar }}
                />
            </View>
            <Text style={s.fullName}>{user.fullName}</Text>
            <View style={s.info}>
                <Text style={s.infoLable}>{`active: `}</Text>
                <Text style={s.infoText}>
                    {user.ownProducts.items.length}
                </Text>
            </View>

            <Touchable style={s.setting} onPress={toSettingScreen}>
                <AntDesign name="setting" size={24} color="black" />
            </Touchable>
        </View>
    );
}

export default observer(UserInfo);
