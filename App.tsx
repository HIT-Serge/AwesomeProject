
import { FlatList, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableWithoutFeedback, useColorScheme, TextInput, View, } from 'react-native';
import { ApiResponse, FetchResponse, SerieObject, StateContextType, StateType } from "./types";
import React, { useState, useEffect, useContext, createContext, } from 'react';
import styles from './styles';
import type { PropsWithChildren } from 'react';
// import { POSTER_BASE_URL, TITLE } from '@env';
import { Home } from './src/Home';
import { Colors } from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;

}>;

function App(): JSX.Element {
  const backgroundStyle = {
    backgroundColor: "#fff",
  };

  return (
    <SafeAreaView style={styles.appContainer}>
      <View style={styles.mainImageContainer}>
        <Image source={require('./Assets/netnietflix.png')}
          style={styles.mainImage} />
      </View>
      <Home />

    </SafeAreaView>
  );
}

export default App;
