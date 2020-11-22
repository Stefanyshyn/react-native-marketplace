import React, { useCallback, useRef } from 'react';
import { Alert, Image, ScrollView } from 'react-native';
import s from './style';
import { Entypo } from '@expo/vector-icons';
import Touchable from '../../../../components/Touchable/Touchable';
import ActionSheet from 'react-native-actionsheet';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import ImageBox from './ImageBox/ImageBox';

function ImagePiсker({ append, remove, photos }) {
    const actionRef = useRef();
    const handleOpenActionSheet = useCallback(async () => {
        await actionRef.current.show();
    });
    const handleOpenCamera = async () => {
        try {
            const permission = await Permissions.getAsync(
                Permissions.CAMERA,
            );
            console.log(permission);
            await ImagePicker.launchCameraAsync();
            if (
                permission.status !== 'granted' &&
                !result.cancelled
            ) {
                append([...photos, result.uri]);
            }
        } catch (err) {
            Alert.alert('Error', JSON.stringify(err));
        }
    };
    const handleOpenGallery = async () => {
        try {
            const permissions = await Permissions.getAsync(
                Permissions.CAMERA,
                Permissions.CAMERA_ROLL,
            );
            const result = await ImagePicker.launchImageLibraryAsync();
            if (
                permission.status !== 'granted' &&
                !result.cancelled
            ) {
                append([...photos, result.uri]);
            }
        } catch (err) {
            Alert.alert('Lol', JSON.stringify(err));
        }
    };
    const handleChoose = useCallback((index) => {
        switch (index) {
            case 0:
                handleOpenCamera();
                break;
            case 1:
                handleOpenGallery();
                break;
        }
    });
    return (
        <ScrollView
            contentContainerStyle={s.container}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
        >
            {photos.map((photo, index) => (
                <ImageBox
                    key={photo}
                    remove={() => remove(index)}
                    photo={photo}
                />
            ))}
            <Touchable
                style={[s.box, s.boxAppend]}
                onPress={handleOpenActionSheet}
            >
                <Entypo name="plus" size={32} color="#A0A4B1" />
            </Touchable>
            <ActionSheet
                ref={actionRef}
                options={['Camera', 'Gallery', 'Cancel']}
                cancelButtonIndex={2}
                onPress={handleChoose}
            />
        </ScrollView>
    );
}
export default ImagePiсker;
