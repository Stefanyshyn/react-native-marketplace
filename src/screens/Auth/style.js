import { StyleSheet } from 'react-native';
import color from '../../styles/color';
export default StyleSheet.create({
    container: {
        backgroundColor: color.background,
        paddingHorizontal: 20,
        flex: 1,
        justifyContent: 'space-between',
    },
    bottom: {
        backgroundColor: color.white,
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    bottomText: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        marginRight: 16,
        alignItems: 'center',
    },
    bottomInfo: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        color: color.gray,
    },
    redirect: {
        height: 60,
        justifyContent: 'center',
    },
    redirectText: {
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 14,
        color: color.primary,
        textTransform: 'uppercase',
    },
    button: {
        width: 73,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.primary,
        borderRadius: 44,
    },
    btnText: {
        color: color.white,
        fontSize: 14,
        lineHeight: 21,
        fontWeight: '500',
        textTransform: 'uppercase',
    },
});
