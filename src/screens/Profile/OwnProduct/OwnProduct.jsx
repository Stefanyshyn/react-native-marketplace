import React, { useCallback, useState } from 'react';
import { Text, View } from 'react-native';
import s from './style';
import { observer } from 'mobx-react';
import Touchable from '../../../components/Touchable/Touchable';
import { ScrollView } from 'react-native-gesture-handler';
import ProductListWithoutFetchingMore from '../../../components/Products/ProductList/ProductListWithoutFetchingMore';

const ownProduct = [
    {
        id: 620,
        ownerId: 755,
        title: 'Motorcycle',
        description: 'Wow, so sick',
        photos: [
            'https://res.cloudinary.com/apiko-spring-coures-2019/image/upload/v1605619200/vo4e80gmtnuna6sfkejs.jpg',
        ],
        location: 'Ternopil',
        price: 8500,
        saved: false,
        createdAt: '2020-11-17T13:20:07.745Z',
        updatedAt: '2020-11-17T13:20:07.745Z',
    },
    {
        id: 619,
        ownerId: 754,
        title: 'Lion',
        description: 'King ',
        photos: [
            'https://res.cloudinary.com/apiko-spring-coures-2019/image/upload/v1605617392/wklde098sbhyeuzwxaz8.jpg',
        ],
        location: 'Kyiv',
        price: 13500,
        saved: false,
        createdAt: '2020-11-17T12:50:00.060Z',
        updatedAt: '2020-11-17T12:50:00.060Z',
    },
    {
        id: 618,
        ownerId: 703,
        title: 'Car',
        description: 'Car car',
        photos: [
            'https://res.cloudinary.com/apiko-spring-coures-2019/image/upload/v1605611201/ffqr8rsynhgsynohmor4.jpg',
        ],
        location: 'Ternopil',
        price: 15000,
        saved: false,
        createdAt: '2020-11-17T11:06:43.413Z',
        updatedAt: '2020-11-17T11:06:43.413Z',
    },
    {
        id: 617,
        ownerId: 686,
        title: 'Test Date',
        description: 'To test Date',
        photos: [
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/220px-React-icon.svg.png',
        ],
        location: 'Ternopil, UA ',
        price: 100,
        saved: false,
        createdAt: '2020-11-15T11:22:00.843Z',
        updatedAt: '2020-11-15T11:22:00.843Z',
    },
    {
        id: 616,
        ownerId: 703,
        title: 'Nissan',
        description: 'Sport car ',
        photos: [
            'https://res.cloudinary.com/apiko-spring-coures-2019/image/upload/v1605362899/iiupvtdvlwon7mc8inu0.jpg',
        ],
        location: 'Khmelnitskiy',
        price: 15000,
        saved: false,
        createdAt: '2020-11-14T14:08:24.723Z',
        updatedAt: '2020-11-14T14:08:24.723Z',
    },
    {
        id: 615,
        ownerId: 742,
        title: 'Lion',
        description: 'King of animals',
        photos: [
            'https://res.cloudinary.com/apiko-spring-coures-2019/image/upload/v1605360824/fbonorq8tdaxhz9pqcxz.jpg',
        ],
        location: 'Khmelnitskiy',
        price: 15000,
        saved: false,
        createdAt: '2020-11-14T13:33:54.016Z',
        updatedAt: '2020-11-14T13:33:54.016Z',
    },
    {
        id: 614,
        ownerId: 742,
        title: 'Lion',
        description: 'King of animals',
        photos: [],
        location: 'Ternopil',
        price: 4555,
        saved: false,
        createdAt: '2020-11-14T13:31:05.707Z',
        updatedAt: '2020-11-14T13:31:05.707Z',
    },
    {
        id: 613,
        ownerId: 742,
        title: 'Lion',
        description: 'King of animals',
        photos: [],
        location: 'Ternopil',
        price: 1356,
        saved: false,
        createdAt: '2020-11-14T13:28:56.812Z',
        updatedAt: '2020-11-14T13:28:56.812Z',
    },
    {
        id: 612,
        ownerId: 703,
        title: 'asd',
        description: 'asd',
        photos: [],
        location: 'asd',
        price: 111,
        saved: false,
        createdAt: '2020-11-14T13:12:29.908Z',
        updatedAt: '2020-11-14T13:12:29.908Z',
    },
    {
        id: 611,
        ownerId: 703,
        title: 'zxc',
        description: 'zxc',
        photos: [],
        location: 'zxc',
        price: 111,
        saved: false,
        createdAt: '2020-11-14T13:11:06.625Z',
        updatedAt: '2020-11-14T13:11:06.625Z',
    },
    {
        id: 610,
        ownerId: 703,
        title: 'asd',
        description: 'asd',
        photos: [],
        location: 'asd',
        price: 100,
        saved: false,
        createdAt: '2020-11-14T13:10:47.147Z',
        updatedAt: '2020-11-14T13:10:47.147Z',
    },
    {
        id: 609,
        ownerId: 703,
        title: 'qwe',
        description: 'qwe',
        photos: [],
        location: 'qwe',
        price: 111,
        saved: false,
        createdAt: '2020-11-14T13:08:40.964Z',
        updatedAt: '2020-11-14T13:08:40.964Z',
    },
    {
        id: 608,
        ownerId: 703,
        title: 'qwe',
        description: 'qwe',
        photos: [],
        location: 'qwe',
        price: 100,
        saved: false,
        createdAt: '2020-11-14T13:05:15.689Z',
        updatedAt: '2020-11-14T13:05:15.689Z',
    },
    {
        id: 607,
        ownerId: 703,
        title: 'wer',
        description: 'wer',
        photos: [],
        location: 'wer',
        price: 100,
        saved: false,
        createdAt: '2020-11-14T13:04:47.224Z',
        updatedAt: '2020-11-14T13:04:47.224Z',
    },
    {
        id: 606,
        ownerId: 703,
        title: 'test4',
        description: '123',
        photos: [
            'https://res.cloudinary.com/apiko-spring-coures-2019/image/upload/v1605358886/o2se6jl5tj1usrwooshw.png',
        ],
        location: 'test4',
        price: 100,
        saved: false,
        createdAt: '2020-11-14T13:02:01.991Z',
        updatedAt: '2020-11-14T13:02:01.991Z',
    },
    {
        id: 603,
        ownerId: 703,
        title: 'test2',
        description: 'test2',
        photos: [],
        location: 'test2',
        price: 100,
        saved: false,
        createdAt: '2020-11-14T12:59:47.806Z',
        updatedAt: '2020-11-14T12:59:47.806Z',
    },
    {
        id: 602,
        ownerId: 703,
        title: 'test',
        description: 'test',
        photos: [],
        location: 'test',
        price: 12,
        saved: false,
        createdAt: '2020-11-14T12:58:32.500Z',
        updatedAt: '2020-11-14T12:58:32.500Z',
    },
    {
        id: 601,
        ownerId: 703,
        title: 'qweqwe',
        description: 'zxczxc',
        photos: [],
        location: 'asdasd',
        price: 1,
        saved: false,
        createdAt: '2020-11-14T12:57:56.362Z',
        updatedAt: '2020-11-14T12:57:56.362Z',
    },
    {
        id: 600,
        ownerId: 703,
        title: 'sdf',
        description: 'sdf',
        photos: [
            'https://res.cloudinary.com/apiko-spring-coures-2019/image/upload/v1605357348/pjlkus1lzwgbppkj3u2j.png',
        ],
        location: 'sdf',
        price: 0,
        saved: false,
        createdAt: '2020-11-14T12:35:59.854Z',
        updatedAt: '2020-11-14T12:35:59.854Z',
    },
    {
        id: 599,
        ownerId: 703,
        title: 'sdf',
        description: 'sdf',
        photos: [
            'https://res.cloudinary.com/apiko-spring-coures-2019/image/upload/v1605357348/pjlkus1lzwgbppkj3u2j.png',
        ],
        location: 'sdf',
        price: 0,
        saved: false,
        createdAt: '2020-11-14T12:35:59.460Z',
        updatedAt: '2020-11-14T12:35:59.460Z',
    },
];
function OwnProduct() {
    const store = { items: ownProduct };
    const [tab, setTab] = useState(1);
    const onPress = useCallback((tab) => {
        setTab(tab);
    }, []);
    return (
        <React.Fragment>
            <View style={s.tabsWrapper}>
                <Touchable
                    style={[s.tab, tab === 1 && s.tabActive]}
                    onPress={() => onPress(1)}
                >
                    <Text
                        style={[
                            s.tabText,
                            tab === 1 && s.tabTextActive,
                        ]}
                    >
                        ACTIVE
                    </Text>
                </Touchable>
                <Touchable
                    style={[s.tab, tab === 2 && s.tabActive]}
                    onPress={() => onPress(2)}
                >
                    <Text
                        style={[
                            s.tabText,
                            tab === 2 && s.tabTextActive,
                        ]}
                    >
                        ARCHIVED
                    </Text>
                </Touchable>
            </View>
            <ScrollView style={s.productsWrapper}>
                <ProductListWithoutFetchingMore
                    store={store}
                    fetch={{ isLoading: false }}
                />
            </ScrollView>
        </React.Fragment>
    );
}
export default observer(OwnProduct);
