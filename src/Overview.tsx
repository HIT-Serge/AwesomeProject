
import { FlatList, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableWithoutFeedback, useColorScheme, TextInput, View, } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import { ApiResponse, FetchResponse, SerieObject, } from "../types";
import useFetch from "./useFetch";
import styles from "../styles";
import { StateContext } from './Home';
import Search from "./Search";

type StateType = {
    detailsOn: boolean;
    showID?: number;
};
type StateContextType = {
    detailState: StateType;
    setDetailState: (value: any) => void;
};


export default function Overview(): JSX.Element {

    const response = useFetch("https://api.themoviedb.org/3/tv/popular") as FetchResponse;
    const loading = response.loading;
    const data = response.data as ApiResponse;
    const resultData = data?.results as SerieObject[];
    const noImage = require('../Assets/noImageAvailable.jpg');


    const { detailState, setDetailState } = useContext<StateContextType>(StateContext);

    // console.log(resultData);
    return (
        <View style={styles.componentContainer}>
            <Search />
            <View style={styles.sectionHeaderContainer}>
                <Text style={styles.headerTitle}>Popular TV Shows</Text>
            </View>

            <ScrollView horizontal={true}>

                {resultData?.map((item) => {
                    let posterImage: string = item.poster_path ? `https://image.tmdb.org/t/p/w500/${item.poster_path}` : noImage;

                    return (
                        <TouchableWithoutFeedback key={item.id}
                            onPress={() => setDetailState({ ...detailState, detailsOn: !detailState.detailsOn, showID: item.id })}>
                            <View>

                                <Image source={{ uri: `${posterImage}` }} style={styles.image} />
                                <Text style={styles.itemText}>{item.name}</Text>
                                <Text style={styles.itemText}>{item.first_air_date}</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    );
                })
                }
            </ScrollView>
        </View>
    );

}