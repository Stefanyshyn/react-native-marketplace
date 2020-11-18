import { StyleSheet } from 'react-native';
import color from '../../../../styles/color';
export default StyleSheet.create({
    inputWrapper: {
        marginTop: 20,
        borderColor: color.white,
    },
    labelInput: {
        position: 'absolute',
        top: -12,
        left: 16,
        backgroundColor: color.white,
        paddingHorizontal: 4,
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 16,
        height: 24,
        color: color.primary,
        elevation: 10,
        zIndex: 10,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        elevation: 0,
        zIndex: 1,
    },
    input: {
        backgroundColor: color.white,
        height: 44,
        paddingHorizontal: 10,

        borderWidth: 2,
        borderRadius: 4,
        borderColor: color.black,

        paddingHorizontal: 16,
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 16,
        justifyContent: 'center',
        color: color.inputText,
    },
    focusedInput: {
        borderColor: color.primary,
    },
    errInput: {
        borderColor: color.error,
    },
    errLable: {
        color: color.error,
    },
});
