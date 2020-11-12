import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Navigator from './src/navigation';
import { StyleSheet, View } from 'react-native';
import {createStore, Provider} from './src/stores/createStore';

const MSTStore =  createStore();

export default function App() {
  return (
    <Provider value={MSTStore}>
      <View style={styles.container}>
        <Navigator/>
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
