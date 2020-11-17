import React, { useCallback } from 'react';
import { Image, Text, View } from 'react-native';
import s from './style';
import Touchable from '../../Touchable/Touchable';
function ProductView({item: product, rootProps}){
    const {onPressItem} = rootProps;
    const handleSave = useCallback(()=>{
        console.log('save', product.id)
    },[])

    return (
    <Touchable 
        style={s.container}
        onPress={()=>onPressItem(product.id)}
    >     
                <Image style={s.photo} source={{
                    uri:product.photos[0]
                }}/>
                <View style={s.infoWrapper}>
                    <Text numberOfLines={1} style={s.title}>{product.title}</Text>                
                    <View style={s.bottom}>
                        <Text numberOfLines={1}  style={s.price}>${product.price}</Text>
                        <Text style={s.save} onPress={handleSave}> save</Text>

                        </View>
                </View>
            </Touchable>
    )
}
export default ProductView;