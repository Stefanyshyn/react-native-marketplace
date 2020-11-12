import React, { useCallback, useState } from 'react';
import { Text, TextInput, View, KeyboardAvoidingView, Keyboard } from 'react-native';
import Touchable from '../../../components/Touchable/Touchable';
import s from "./style";
import {useStore} from '../../../stores/createStore';
import NavigationService from '../../../services/NavigationService';
import { alert } from '../../../utils/alert';

function LoginScreen() {
    const store = useStore();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = useCallback(()=>{
        
        store.auth.loginFlow.run(email, password).then(()=>{
            NavigationService.navigateToHome();
        }).catch(err=> alert(err));

    },[email, password])

    const [focusedInputs, setFocusedInputs] = useState({email: false, password: false});

    return (
        <KeyboardAvoidingView  keyboardVerticalOffset={-7000} behavior="padding" style={s.container}>
            <View style={s.top}>
                <View style={s.inputWrapper}>
                    <Text style={s.labelInput}>Email</Text>
                    <TextInput style={[s.input, focusedInputs.email && s.focusedInput]}
                    onFocus={()=>setFocusedInputs({...focusedInputs,email: true})}
                    onBlur={()=>{
                        setFocusedInputs({...focusedInputs,email: false})
                        Keyboard.dismiss();
                    }}
                    value={email} onChange={(event) =>setEmail(event.target.value)} />
                </View>
                <View style={s.inputWrapper}>
                    <Text style={s.labelInput}>Password</Text>
                    <TextInput style={[s.input, focusedInputs.password && s.focusedInput]} 
                    onFocus={()=>setFocusedInputs({...focusedInputs,password: true})}
                    onBlur={()=>{
                        setFocusedInputs({...focusedInputs,password: false})
                        Keyboard.dismiss();
                    }}
                    secureTextEntry={false}
                    value={password} onChange={(event) =>setPassword(event.target.value)} />
                </View>
            </View>
            <View style={s.bottom}>
                <View style={s.bottomText}>
                    <Text style={s.bottomInfo}>Don’t have an account?</Text>
                        <Text  style={s.redirect}>{' REGISTER'}</Text>
                </View>
                <Touchable onPress={handleLogin} style={s.button}>
                        <Text style={s.btnText}>Login</Text>
                    </Touchable>
            </View>
        </KeyboardAvoidingView>
    )
}

export  default LoginScreen;