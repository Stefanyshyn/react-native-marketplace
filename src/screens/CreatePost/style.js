import { StyleSheet } from 'react-native';
import color from '../../styles/color';
export default StyleSheet.create({
    headerLeft: {
        marginLeft: 16,
    },
    headerRight: {
        marginRight: 16,
    },
    headerTitleStyle: {
        textAlign: 'center',
    },
    textHeader: {
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 24,
        color: color.primary,
    },
    container: {
        flex: 1,
        paddingVertical: 16,
    },
    inputTextAlignTop: {
        textAlignVertical: 'top',
    },
    label: {
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 21,
        color: color.black,

        marginTop: 24,
        marginHorizontal: 16,
    },
    input: {
        padding: 16,
        backgroundColor: color.white,
        borderColor: color.inputBorder,
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 4,

        marginTop: 8,
        marginHorizontal: 16,
    },
});
