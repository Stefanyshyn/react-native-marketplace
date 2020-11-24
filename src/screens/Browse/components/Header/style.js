import { StyleSheet } from 'react-native';
import color from '../../../../styles/color';
export default StyleSheet.create({
    searchWrapper: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 8,
        backgroundColor: color.headerSearch,
        height: 36,
    },
    searchIcon: {
        marginVertical: 10,
        marginLeft: 16,
    },
    searchInput: {
        marginLeft: 8,
        marginVertical: 6,
        marginRight: 16,

        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 24,
        width: '100%',
    },
    searchButton: {
        marginLeft: 16,
        height: 36,
        paddingHorizontal: 16,
        borderRadius: 8,
        backgroundColor: color.primary,
        justifyContent: 'center',
    },
    textSearchButton: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 24,
        color: color.white,
    },
});
