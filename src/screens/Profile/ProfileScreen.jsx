import React, { useCallback } from 'react';
import { Text,View } from 'react-native';
import { Button } from 'react-native-paper';
import s from "./style";

function ProfileScreen() {

    const onLogout = useCallback(()=>{
        console.log('logout');
    }, [])
    return (
        <View style={s.container}>
            <Text>
                Profile
            </Text>
            <Button onPress={onLogout} title="Logout"></Button>
        </View>    
    )
}

export  default ProfileScreen;