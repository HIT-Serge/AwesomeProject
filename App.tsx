
import { FlatList, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableWithoutFeedback, useColorScheme, TextInput, View, } from 'react-native';
import { ApiResponse, FetchResponse, SerieObject, } from "./Types/types";
import React, { useState, useEffect, useContext, createContext, } from 'react';
import styles from './Styles/styles';
import type { PropsWithChildren } from 'react';
// import { POSTER_BASE_URL, TITLE } from '@env';
import { Home } from './Components/Home';


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
