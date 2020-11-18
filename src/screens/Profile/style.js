import { StyleSheet } from 'react-native';
import color from '../../styles/color';
export default StyleSheet.create({
    container: {
        backgroundColor: color.background,
        flex: 1,
    },
    button: {
        flex: 1,
        backgroundColor: color.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonTitle: {
        color: color.white,
        fontWeight: '500',
    },
});
