import React, { useCallback, useState } from 'react';
import { Text, View, KeyboardAvoidingView } from 'react-native';
import Touchable from '../../../components/Touchable/Touchable';
import s from "../style";
import NavigationService from '../../../services/NavigationService';
import { screens } from '../../screens';
import RegisterForm from './RegisterForm/';

function RegisterScreen() {
    const Redirect = useCallback(()=>{
        NavigationService.navigate(screens.Login)
    })
    const [handleSubmit, setHandleSubmit] = useState();
    
    const blindSubmit = useCallback((handle)=>{
        if(!handleSubmit){
            setHandleSubmit(()=>()=>handle());
        }
    })
    
    const runHandleSubmit = () => {
        handleSubmit()
    }
    return (
        <KeyboardAvoidingView  keyboardVerticalOffset={-7000} behavior="padding" style={s.container}>
            <View style={s.top}>
                <RegisterForm blindSubmit={blindSubmit}/>
            </View>
            <View style={s.bottom}>
                <View style={s.bottomText}>
                    <Text style={s.bottomInfo}>Don’t have an account?</Text>
                    <View style={s.redirect}>
                        <Text  style={s.redirectText} onPress={Redirect}>{' LOGIN'}</Text>
                    </View> 
                </View>
                <Touchable onPress={runHandleSubmit} style={s.button}>
                        <Text style={s.btnText}>Register</Text>
                    </Touchable>
            </View>
        </KeyboardAvoidingView>
    )
}

export  default RegisterScreen;