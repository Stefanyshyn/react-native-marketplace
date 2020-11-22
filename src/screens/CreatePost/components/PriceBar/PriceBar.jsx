import React, { useCallback, useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import style from '../../../../styles/style';
import Touchable from '../../../../components/Touchable/Touchable';
import s from './style';

function PriceBar({ onChange, price }) {
    const [typePrice, setTypePrice] = useState(1);

    const handleKeyPress = useCallback((key) => {
        const value = price + key;
        if (+value + '' != value) key.key = '';
    });
    return (
        <View style={s.container}>
            <View style={s.tabsWrapper}>
                <Touchable
                    style={[
                        s.tab,
                        s.tabLeft,
                        style.inputBorder,
                        typePrice === 1 && s.tabActive,
                    ]}
                    onPress={() => setTypePrice(1)}
                >
                    <Text
                        style={[
                            s.tabText,
                            typePrice === 1 && s.tabTextActive,
                        ]}
                    >
                        Price
                    </Text>
                </Touchable>
                <Touchable
                    style={[
                        s.tab,
                        s.tabRight,
                        style.inputBorder,
                        typePrice === 2 && s.tabActive,
                    ]}
                    onPress={() => {
                        onChange('0');
                        setTypePrice(2);
                    }}
                >
                    <Text
                        style={[
                            s.tabText,
                            typePrice === 2 && s.tabTextActive,
                        ]}
                    >
                        Free
                    </Text>
                </Touchable>
            </View>
            {typePrice === 1 && (
                <>
                    <View style={[style.inputBorder, s.separator]} />
                    <View style={[s.inputWrapper, style.inputBorder]}>
                        <TextInput
                            keyboardType={'numeric'}
                            style={s.input}
                            value={price}
                            placeholder="Price"
                            onChangeText={onChange}
                            onKeyPress={handleKeyPress}
                        />
                        <Text style={s.typeMoney}>uah</Text>
                    </View>
                </>
            )}
        </View>
    );
}

export default PriceBar;
