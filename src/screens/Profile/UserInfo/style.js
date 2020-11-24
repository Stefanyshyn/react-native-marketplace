import { StyleSheet } from 'react-native';
import color from '../../../styles/color';

export default StyleSheet.create({
    container: {
        flex: 1,
        height: 153,
        width: '100%',
        backgroundColor: color.white,
    },
    avatarWrapper: {
        width: '100%',
        alignItems: 'center',
    },
    avatar: {
        marginTop: 16,
        height: 72,
        width: 72,
        borderRadius: 36,
    },
    setting: {
        position: 'absolute',
        top: 16,
        right: 16,
    },
    fullName: {
        marginTop: 8,
        width: '100%',
        textAlign: 'center',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 24,
    },
    info: {
        marginHorizontal: 16,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    infoLabel: {
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 21,
    },
    infoText: {
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 14,
        lineHeight: 21,
    },
});
