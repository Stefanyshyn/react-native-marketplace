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

function setInputProps(formik, nameField) {
    return {
        onChange: formik.handleChange(nameField),
        onBlur: formik.handleBlur(nameField),
        value: formik.values.description,
    };
}
function CreatePostScreen() {
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
                        photos: Y.array().required('Required'),
                    })}
                >
                    {(formik) => (
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
                                <Text style={s.label}>PHOTOS</Text>
                                <ImagePiker
                                    remove={(index) =>
                                        formik.setFieldValue(
                                            'photos',
                                            formik.values.photos.filter(
                                                (_, i) => index !== i,
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
                                        formik.handleChange('price')(
                                            value,
                                        )
                                    }
                                    price={formik.values.price}
                                />
                            </View>
                            <View>
                                <Text style={s.label}>LOCATION</Text>
                                <TextInput
                                    style={s.input}
                                    placeholder="Location"
                                    {...setInputProps(
                                        formik,
                                        'location',
                                    )}
                                />
                            </View>
                        </React.Fragment>
                    )}
                </Formik>
            </KeyboardAvoidingView>
        </ScrollView>
    );
}
CreatePostScreen.navigationOptions = {
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
            onPress={() => alert('post')}
        >
            <Text>Post</Text>
        </Touchable>
    ),
};

export default CreatePostScreen;
