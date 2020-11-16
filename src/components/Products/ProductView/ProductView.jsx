import React from 'react';
import { Image, Text, View } from 'react-native';
import s from './style';
const product = {
    "id": 554,
    "ownerId": 723,
    "title": "Product with to images",
    "description": "Product with to images",
    "photos": [
        "https://res.cloudinary.com/olehlavryk/image/upload/v1604217622/apiko_upload/jvhiqha9amdaw55pwxpi.jpg",
        "https://res.cloudinary.com/olehlavryk/image/upload/v1604217624/apiko_upload/q7tvxfaz0vs3nbzsoyw6.jpg"
    ],
    "location": "CH",
    "price": 200,
    "saved": false,
    "createdAt": "2020-11-01T08:00:26.183Z",
    "updatedAt": "2020-11-01T08:00:26.183Z"
}
function ProductView(){
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