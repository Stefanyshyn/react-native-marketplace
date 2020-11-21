import { StyleSheet } from 'react-native';
import color from '../styles/color';
export default StyleSheet.create({
    tabActive: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 10,
        lineHeight: 15,
        color: color.primary,
    },
    tabInactive: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 10,
        lineHeight: 15,
        color: color.gray,
    },
    center: {
        textAlign: 'center',
    },
});
