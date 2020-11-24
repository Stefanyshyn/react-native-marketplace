import { StyleSheet } from 'react-native';
import color from '../../styles/color';
import { headerHeight } from '../../styles/dimentions';

export default StyleSheet.create({
    container: {
        height: headerHeight,
        paddingTop: 20,
        backgroundColor: color.white,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: color.inputBorder,
        paddingHorizontal: 8,
        elevation: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});
