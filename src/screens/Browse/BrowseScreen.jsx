import React from 'react';
import { Button, Text,View } from 'react-native';
import NavigationService from '../../services/NavigationService';
import { screens } from '../screens';
import s from "./style";
import ProductList from '../../components/Products/ProductList/ProductList';
let product = (id)=>({
    "id": id,
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
})
const products = [];
for(let i = 1; i < 11; ++i)
    products.push(product(i))
function BrowseScreen() {
    return (
        <View style={s.container}>
            <ProductList products={products}/>
        </View>
    )
}

export  default BrowseScreen;