import React from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

function DismissKeyboard({children}){
    return (
        <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss(); console.log('lol')}}>
            {children}
        </TouchableWithoutFeedback>
    )
}
export default DismissKeyboard;