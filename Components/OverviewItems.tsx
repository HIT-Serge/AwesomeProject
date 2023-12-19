// COMPONENTS

const OverviewItem: React.FC<OverviewItemProps> = (props: OverviewItemProps) => {
    const item = props.item;
    const { detailState, setDetailState } = useContext<StateContextType>(StateContext);
    const noImage = require('../Assets/noImageAvailable.jpg');

    let posterImage: string = item.poster_path ? `https://image.tmdb.org/t/p/w500/${props.item.poster_path}` : noImage;

    return (
        <TouchableWithoutFeedback key={item.id}
            onPress={() => setDetailState({ ...detailState, detailsOn: !detailState.detailsOn, showID: item.id })}>
            <View>

                <Image source={{ uri: `${posterImage}` }} style={styles.image} />
                <Text style={styles.itemText}>{item.name}</Text>
                <Text style={styles.itemText}>{item.first_air_date}</Text>
            </View>
        </TouchableWithoutFeedback>)
        ;
};
export default OverviewItem;


// STYLES
const styles = StyleSheet.create({
    itemText: {
        marginLeft: 10,
        color: 'white',

    },
    image: {
        width: 200,
        height: 300,
    },
});


//TYPES
type OverviewItemProps = {
    item: SerieObject;
};

type StateType = {
    detailsOn: boolean;
    showID?: number;
};
type StateContextType = {
    detailState: StateType;
    setDetailState: (value: any) => void;
};




// IMPORTS
import { FlatList, Image, ImageSourcePropType, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableWithoutFeedback, useColorScheme, TextInput, View, SectionList, } from 'react-native';
import React, { useState, useEffect, useContext, createContext, } from 'react';
import { ApiResponse, FetchResponse, SerieObject, } from "../Types/types";
import { StateContext } from './Home';