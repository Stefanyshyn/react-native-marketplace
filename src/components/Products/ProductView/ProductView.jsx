import React from 'react';
import { Image, Text, View } from 'react-native';
import s from './style';

function ProductView({item: product}){
    return (
        <View style={s.container}>
            <Image style={s.photo} source={{
                uri:product.photos[0]
            }}/>
            <View style={s.infoWrapper}>
                <Text style={s.title}>{product.title}</Text>                
                <View style={s.bottom}>
                    <Text style={s.price}>${product.price}</Text>
                    <Text style={s.save}> save</Text>

                    </View>
            </View>
        </View>
    )
}
export default ProductView;