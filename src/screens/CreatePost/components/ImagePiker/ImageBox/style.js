import { StyleSheet } from 'react-native';
import color from '../../../../../styles/color';

export default StyleSheet.create({
    container: {
        width: 44,
        height: 44,

        marginHorizontal: 8,
        backgroundColor: color.white,
        borderColor: color.inputBorder,
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 4,
    },
    close: {
        position: 'absolute',
        right: 2,
        top: 2,
    },
    image: {
        flex: 1,
    },
});
