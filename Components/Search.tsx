import { FlatList, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableWithoutFeedback, useColorScheme, TextInput, View, } from 'react-native';
import { ApiResponse, FetchResponse, SerieObject, } from "../Types/types";
import React, { useState, useEffect, useContext, createContext, } from 'react';
import styles from '../Styles/styles';

export default function Search(): JSX.Element {


    const [searchState, setSearchState] = useState<string>("");
    const inputHandler = (inputText: string) => {
        setSearchState(inputText);
    }

    return (

        <View style={styles.searchContainer}>
            <TextInput style={styles.searchTextInput} onChangeText={inputHandler}></TextInput>
        </View>
    );
}

