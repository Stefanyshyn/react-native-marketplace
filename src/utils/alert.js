import { Alert } from 'react-native';

export const alert = (data) =>
    Alert.alert('data', JSON.stringify(data));
