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
    box: {
        width: 44,
        height: 44,

        marginHorizontal: 8,
        backgroundColor: color.white,
        borderColor: color.inputBorder,
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 4,
    },
    boxAppend: {
        padding: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
