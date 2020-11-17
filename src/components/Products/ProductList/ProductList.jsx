import React from 'react';
import { FlatList, Text, View } from 'react-native';
import ProductView from '../ProductView/ProductView'
import s from './style'

function ProductList({products, ...props}){
    return (
        <FlatList
            style={s.container}
            columnWrapperStyle={s.columnWrapperStyle}
            data={products}
            renderItem={({item})=><ProductView item={item} rootProps={props} />}
            keyExtractor={(item)=>item.id}
            numColumns={2}

        />
    )
}

export default ProductList;