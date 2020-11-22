import { StyleSheet } from 'react-native';
import color from './color';

const styles = StyleSheet.create({
    fillAll: {
        flex: 1,
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    fontSize: {
        fontSize: 14,
    },
    inputBorder: {
        borderColor: color.inputBorder,
        borderWidth: 1,
        borderRadius: 4,
    },
});

export default styles;
