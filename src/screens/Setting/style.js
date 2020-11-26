import { StyleSheet } from 'react-native';
import color from '../../styles/color';
export default StyleSheet.create({
    headerTitleStyle: {
        textAlign: 'center',
    },
    container: {
        flex: 1,
    },
    logoWrapper: {
        paddingVertical: 16,
        backgroundColor: color.background,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo:{
        width: 77,
        height: 102,
    },
    logout: {
        width: '100%',
        height: 44,
        marginTop: 16,
        backgroundColor: color.white,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoutText:{
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 21,
        color: color.primary,
    },

});
