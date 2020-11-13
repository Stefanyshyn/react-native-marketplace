import { StyleSheet } from 'react-native';
import color from '../../../styles/color'
export default StyleSheet.create({
    container: {
        backgroundColor: color.background,
        paddingHorizontal: 20,
        flex: 1,
        justifyContent:"space-between"
    },
    inputWrapper:{
        marginTop:20,
        borderColor: color.white,
    },
    labelInput:{
        position: 'absolute',
        top: -12,
        left: 16,
        backgroundColor: color.white,
        paddingHorizontal: 4,
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 16,
        height: 24,
        color: color.primary,
        elevation: 10,
        zIndex: 10,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        elevation: 0,
        zIndex: 1,
    },
    input:{
        backgroundColor: color.white,
        height: 44,
        paddingHorizontal: 10,

        borderWidth: 2,
        borderRadius: 4,
        borderColor: color.black,

        paddingHorizontal: 16,
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 16,
        justifyContent: "center",
        color: color.inputText,
    },


    focusedInput:{
        borderColor: color.primary,
    },
    bottom:{
        backgroundColor: color.white,
        height: 60,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between"
    },
    bottomText:{
        flexWrap: "wrap",
        flexDirection: 'row',
        marginRight: 16,
    },
    bottomInfo: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 14,
        lineHeight: 21,
        color: color.gray,
    },
    redirect:{
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 14,
        lineHeight: 21,
        color: color.primary,
        textTransform:"uppercase",
    },
    button:{
        width: 73,
        height: 44,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: color.primary,
        borderRadius: 44,
    },
    btnText:{
        color: color.white,
        fontSize: 14,
        lineHeight: 21,
        fontWeight: "500",
        textTransform:"uppercase",
    }
})