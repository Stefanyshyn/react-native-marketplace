import React from 'react';
import { Image, Text, View } from 'react-native';
import { observer } from 'mobx-react';
import { AntDesign } from '@expo/vector-icons';
import s from './style';
import Touchable from '../../../components/Touchable/Touchable';
const user = {
    id: 415,
    fullName: 'Mr. I1',
    location: 'Ternopil',
    avatar:
        'https://res.cloudinary.com/apiko-spring-coures-2019/image/upload/v1600970052/pqvyup3uaqzwe1xoxf9b.jpg',
    phone: '381000',
    createdAt: '2020-04-29T15:57:11.382Z',
    updatedAt: '2020-09-25T19:15:14.549Z',
    email: 'testivan@q.q',
    ownProduct: {
        items: [],
    },
};

function UserInfo() {
    return (
        <View style={s.container}>
            <View style={s.avatarWrapper}>
                <Image
                    style={s.avatar}
                    source={{ uri: user.avatar }}
                />
            </View>
            <Text style={s.fullName}>{user.fullName}</Text>
            <View style={s.info}>
                <Text style={s.infoLable}>{`active: `}</Text>
                <Text style={s.infoText}>
                    {user.ownProduct.items.length}
                </Text>
            </View>

            <Touchable style={s.setting}>
                <AntDesign name="setting" size={24} color="black" />
            </Touchable>
        </View>
    );
}

export default observer(UserInfo);
