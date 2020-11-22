import { StyleSheet } from 'react-native';
import color from '../../../../styles/color';

export default StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: color.white,
    },
    tabsWrapper: {
        flexDirection: 'row',
        height: 32,
    },
    tab: {
        flex: 1,
        backgroundColor: color.white,
        borderRadius: 4,

        justifyContent: 'center',
        alignItems: 'center',
    },
    tabActive: {
        backgroundColor: color.primary,
    },
    tabLeft: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
    },
    tabRight: {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
    },
    tabText: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 24,
        color: color.primary,
    },
    tabTextActive: {
        color: color.white,
    },
    inputWrapper: {
        flexDirection: 'row',
        marginTop: 16,
        backgroundColor: color.white,
        paddingRight: 16,
    },
    input: {
        flex: 1,
        padding: 10,
        paddingLeft: 16,
        height: 44,
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 24,
        color: color.black,
    },
    separator: {
        marginTop: 16,
    },
    typeMoney: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 16,
        height: 44,
        color: color.primary,
        textAlignVertical: 'center',
    },
});
