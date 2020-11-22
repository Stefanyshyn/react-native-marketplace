import { StyleSheet } from 'react-native';
import color from '../../../../styles/color';

export default StyleSheet.create({
    container: {
        minWidth: '100%',
        alignItems: 'center',
        height: 76,
        paddingHorizontal: 8,

        borderWidth: 1,
        borderColor: color.inputBorder,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        backgroundColor: color.white,
    },
    boxAppend: {
        padding: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
