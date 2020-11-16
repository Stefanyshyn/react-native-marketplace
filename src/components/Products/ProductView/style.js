import { StyleSheet } from 'react-native';
import color from '../../../styles/color'
export default StyleSheet.create({
    container: {
        borderRadius: 10,
        width:148,
        height: 209,
        overflow: 'hidden',
    },
    photo:{
        width:148,
        height: 148,
        backgroundColor: color.background
    },
    infoWrapper:{
        flex: 1,
        backgroundColor: color.white,
    },
    title:{
        marginLeft: 12,
        marginRight: 8,
        marginTop: 8,
        maxWidth: 128,
        whiteSpace:"nowrap",
        textOverflow: "ellipsis",
        overflow:"hidden",
        height: 21,
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 21,
        color: color.black,
    },
    bottom:{
        marginLeft: 12,
        marginRight: 12,
        height: 24,


        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    price:{
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 24,
        color: color.black,
        maxWidth: 100,
        whiteSpace:"nowrap",
        textOverflow: "ellipsis",
        overflow:"hidden",
    },
    save:{},

    
})