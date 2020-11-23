import React from 'react';
import { KeyboardAvoidingView, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import s from './style';
import color from '../../styles/color';
import Touchable from '../../components/Touchable/Touchable';
import NavigationService from '../../services/NavigationService';
import { alert } from '../../utils/alert';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Formik } from 'formik';
import * as Y from 'yup';
import ImagePiker from './components/ImagePiker/ImagePiсker';
import PriceBar from './components/PriceBar/PriceBar';
import { useStore } from '../../stores/createStore';
import { observer } from 'mobx-react';
import Box from '../../components/Box/Box';
import { getSnapshot } from 'mobx-state-tree';

function setInputProps(formik, nameField) {
    return {
        onChange: formik.handleChange(nameField),
        onBlur: formik.handleBlur(nameField),
        value: formik.values.description,
    };
}
function CreatePostScreen({ navigation }) {
    const store = useStore();
    return (
        <ScrollView>
            <KeyboardAvoidingView style={s.container}>
                <Formik
                    initialValues={{
                        title: '',
                        description: '',
                        photos: [
                            'https://www.pics4learning.com/images/pics-banner1-1300.jpg',
                        ],
                        price: '',
                        location: '',
                    }}
                    validationSchema={Y.object({
                        title: Y.string()
                            .max(50, 'Title is too long!!')
                            .required('Required'),
                        location: Y.string()
                            .max(50, 'Location is too long!!')
                            .required('Required'),
                        description: Y.string().max(
                            255,
                            'Description is too long!!',
                        ),
                        price: Y.number()
                            .max(999999999999, 'Price is too long!!')
                            .required('Required'),
                        photos: Y.array(),
                    })}
                    onSubmit={async (values) => {
                        await store.products.createPostFlow.run(
                            values,
                        );
                        if (!store.products.createPostFlow.isError)
                            NavigationService.goBack();
                    }}
                >
                    {(formik) => {
                        if (!navigation.getParam('onSubmit')) {
                            navigation.setParams({
                                onSubmit: () => formik.submitForm(),
                            });
                        }
                        console.log(formik.errors);
                        return (
                            <React.Fragment>
                                <View>
                                    <Text
                                        style={[
                                            s.label,
                                            { marginTop: 0 },
                                        ]}
                                    >
                                        KEY INFORMATION
                                    </Text>
                                    <TextInput
                                        style={s.input}
                                        placeholder="Title"
                                        {...setInputProps(
                                            formik,
                                            'title',
                                        )}
                                    />
                                    {formik.touched.title &&
                                        formik.errors.title && (
                                            <Box
                                                style={s.box}
                                                text={
                                                    formik.errors
                                                        .title
                                                }
                                                type="error"
                                            />
                                        )}
                                    <TextInput
                                        style={[
                                            s.input,
                                            formik.values.description
                                                ? s.inputTextAlignTop
                                                : '',
                                        ]}
                                        placeholder="Description"
                                        multiline={true}
                                        numberOfLines={4}
                                        {...setInputProps(
                                            formik,
                                            'description',
                                        )}
                                    />
                                </View>
                                <View>
                                    <Text style={s.label}>
                                        PHOTOS
                                    </Text>
                                    <ImagePiker
                                        remove={(index) =>
                                            formik.setFieldValue(
                                                'photos',
                                                formik.values.photos.filter(
                                                    (_, i) =>
                                                        index !== i,
                                                ),
                                            )
                                        }
                                        append={(photos) => {
                                            formik.setFieldValue(
                                                'photos',
                                                photos,
                                            );
                                        }}
                                        photos={formik.values.photos}
                                    ></ImagePiker>
                                </View>
                                <View>
                                    <Text
                                        style={s.label}
                                        placeholder="Price"
                                    >
                                        PRICE
                                    </Text>
                                    <PriceBar
                                        onChange={(value) =>
                                            formik.handleChange(
                                                'price',
                                            )(value)
                                        }
                                        price={formik.values.price}
                                    />
                                </View>
                                {formik.touched.price &&
                                    formik.errors.price && (
                                        <Box
                                            style={s.box}
                                            text={formik.errors.price}
                                            type="error"
                                        />
                                    )}
                                <View>
                                    <Text style={s.label}>
                                        LOCATION
                                    </Text>
                                    <TextInput
                                        style={s.input}
                                        placeholder="Location"
                                        {...setInputProps(
                                            formik,
                                            'location',
                                        )}
                                    />
                                </View>
                                {formik.touched.location &&
                                    formik.errors.location && (
                                        <Box
                                            style={s.box}
                                            text={
                                                formik.errors.location
                                            }
                                            type="error"
                                        />
                                    )}
                            </React.Fragment>
                        );
                    }}
                </Formik>
            </KeyboardAvoidingView>
        </ScrollView>
    );
}
CreatePostScreen.navigationOptions = ({ navigation }) => ({
    headerTitleStyle: s.headerTitleStyle,
    headerLeft: () => (
        <Touchable
            style={s.headerLeft}
            onPress={() => NavigationService.goBack()}
        >
            <Ionicons
                name="ios-close"
                size={32}
                color={color.primary}
            />
        </Touchable>
    ),
    headerRight: () => (
        <Touchable
            style={s.headerRight}
            onPress={() => {
                const onSubmit = navigation.getParam('onSubmit');
                onSubmit && onSubmit();
            }}
        >
            <Text>Post</Text>
        </Touchable>
    ),
});

export default observer(CreatePostScreen);
