import { StyleSheet } from 'react-native';
import color from '../../../styles/color';
export default StyleSheet.create({
    tabsWrapper: {
        flexDirection: 'row',
        height: 48,
        width: '100%',
    },
    tab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabActive: {
        borderColor: color.primary,
        borderBottomWidth: 2,
    },
    tabText: {
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 14,
        lineHeight: 21,
        color: color.primary,
        opacity: 0.5,
    },
    tabTextActive: {
        opacity: 1,
    },
    productsWrapper: {
        flex: 1,
    },
});
