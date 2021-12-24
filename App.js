import React, { useState } from 'react';
import {
  Button,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import styles from './StyleApp.js'
import List from './ListSound/ListSound'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle={'light-content'} />
      <List />
    </SafeAreaView>
  );
};

export default App
