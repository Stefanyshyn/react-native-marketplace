import { useFormikContext } from 'formik';
import React, { useState } from 'react';
import { Keyboard, Text, TextInput, View } from 'react-native';
import s from './style';

const Input = ({isError, onChangeText, label, name, ...props})=>{
    const [isFocused, setIsFocused] = useState(false);
    const {handleBlur} = useFormikContext()
    return(
        <View style={s.inputWrapper}>
            <Text style={[s.labelInput, isError && s.errLable ]} >{label}</Text>
            <TextInput style={[s.input, isFocused && s.focusedInput, isError && s.errInput]}
                onChangeText={onChangeText}
                onFocus={()=>setIsFocused(true)}
                onSubmitEditing={Keyboard.dismiss}
                onBlur={(event)=>{
                    setIsFocused(false)
                    handleBlur(name)(event)
                }}
                {...props}
            />
        </View>
)}

export default Input