import { StyleSheet } from 'react-native';
import color from '../../../styles/color';
export default StyleSheet.create({
    container: {
        marginTop: 8,
        borderRadius: 10,
        width: '49.5%',
        height: 209,
        overflow: 'hidden',
        backgroundColor: color.white,
    },
    photo: {
        height: 148,
    },
    infoWrapper: {
        flex: 1,
    },
    title: {
        marginLeft: 12,
        marginRight: 8,
        marginTop: 8,
        overflow: 'hidden',
        height: 21,
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 21,
        color: color.black,
    },
    bottom: {
        marginLeft: 12,
        marginRight: 12,
        height: 24,

        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    price: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 24,
        color: color.black,
        maxWidth: 100,
        overflow: 'hidden',
    },
    save: {},
});
