import { StyleSheet } from 'react-native';
import color from '../../styles/color';
export default StyleSheet.create({
    container: {
        flex: 1,
    },
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
    filterIcon: {
        paddingHorizontal: 16,
    },
});
