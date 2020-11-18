import React, { useCallback, useState } from 'react';
import { Text, View, KeyboardAvoidingView } from 'react-native';
import Touchable from '../../../components/Touchable/Touchable';
import s from '../style';
import { screens } from '../../screens';
import LoginForm from './LoginForm/';
import NavigationService from '../../../services/NavigationService';

function LoginScreen() {
    const Redirect = useCallback(() => {
        NavigationService.navigate(screens.Register);
    });

    const [handleSubmit, setHandleSubmit] = useState();

    const blindSubmit = useCallback((handle) => {
        if (!handleSubmit) {
            setHandleSubmit(() => () => handle());
        }
    });

    const runHandleSubmit = () => {
        handleSubmit();
    };
    return (
        <KeyboardAvoidingView
            keyboardVerticalOffset={-7000}
            behavior="padding"
            style={s.container}
        >
            <View style={s.top}>
                <LoginForm blindSubmit={blindSubmit} />
            </View>
            <View style={s.bottom}>
                <View style={s.bottomText}>
                    <Text style={s.bottomInfo}>
                        Don’t have an account?
                    </Text>
                    <View style={s.redirect}>
                        <Text
                            style={s.redirectText}
                            onPress={Redirect}
                        >
                            {' REGISTER'}
                        </Text>
                    </View>
                </View>
                <Touchable onPress={runHandleSubmit} style={s.button}>
                    <Text style={s.btnText}>Login</Text>
                </Touchable>
            </View>
        </KeyboardAvoidingView>
    );
}

export default LoginScreen;
