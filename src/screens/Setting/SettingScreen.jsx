import React, { useCallback } from 'react';
import { Image, Text, View } from 'react-native';
import s from './style';
import color from '../../styles/color';
import Touchable from '../../components/Touchable/Touchable';
import NavigationService from '../../services/NavigationService';
import settingLogo from '../../../assets/Screenshot_36.png';
import { SimpleLineIcons } from '@expo/vector-icons'; 
import { screens } from '../screens';
import { observer } from 'mobx-react';
import {useStore} from '../../stores/createStore';
const settingLogoUri = Image.resolveAssetSource(settingLogo).uri;

function SettingScreen() {
    const store = useStore();
    const onLogout = useCallback(()=>{
        store.auth.logoutFlow.run();
        NavigationService.navigate(screens.Auth)
    }, [])
    return (
        <View style={s.container}>
            <View style={s.logoWrapper}>
                <Image style={s.logo} source={{uri: settingLogoUri}}/>
            </View>
            <Touchable style={s.logout} onPress={onLogout}>
                <SimpleLineIcons name="logout" size={16} color={color.primary} />          
                <Text style={s.logoutText}>LOG OUT</Text>
            </Touchable>
        </View>
    );
}
SettingScreen.navigationOptions = {
    headerTitleStyle: s.headerTitleStyle,
};

export default observer(SettingScreen);
