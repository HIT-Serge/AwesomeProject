import {
    FlatList,
    Image,
    ImageSourcePropType,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    TouchableHighlight,
    useColorScheme,
    View,
    SectionList,
} from 'react-native';

import React, { useState, useEffect, useContext, createContext, } from 'react';
import { ApiResponse, FetchResponse, SerieDetailObject, SerieObject, Season } from "../types";
import useFetch from "./useFetch";
import styles from "../styles";
import { StateContext } from './Home';
import DropDown from './DropDown';

export type StateType = {
    detailsOn: boolean;
    showID?: number;
};

type DetailsProps = {
    status: StateType,
    onChange: () => void,
}



// export default function Details({ detailsOn, showID }: StateType) {
export default function Details(props: DetailsProps): JSX.Element {

    function handlePress() {
        props.onChange();
    }
    // fetching api themoviedb
    const response = useFetch(`https://api.themoviedb.org/3/tv/${props.status.showID}`) as FetchResponse;
    // const response = useFetch(`https://api.themoviedb.org/3/tv/${showID}`) as FetchResponse;
    const loading = response.loading;
    const data = response.data;
    const resultData = data as unknown as SerieDetailObject;

    // getting images
    const noImage: string = require('../Assets/noImageAvailable.jpg');
    const arrowImage: ImageSourcePropType = require('../Assets/arrow.png');
    let posterImage: string = resultData?.poster_path ? `https://image.tmdb.org/t/p/w500/${resultData?.poster_path}` : noImage;

    // genresArray set to string using desturcturing length of genre array
    let genres: string[] = resultData?.genres?.map((item, index, { length }) => {
        return length - 1 === index ? `${item.name} ` : `${item.name}, `;
    });

    let createdBy: string[] = resultData?.created_by?.map((item, index, { length }) => {
        return length - 1 === index ? `${item.name} ` : `${item.name}, `;
    });

    let overview: string = resultData?.overview ?? "No overview available";

    type Section = {
        title: string,
        data: string[],
    }

    let sectionDATA: Section[] = [];
    sectionDATA = [

        {
            title: "Genres",
            data: genres ? genres : [],
        },
        {
            title: "Overview",
            data: [overview] ? [overview] : [],
        },
        {
            title: "Created By",
            data: createdBy ? createdBy : [],
        }
    ];

    return (
        <View style={styles.componentContainer}>
            <View style={styles.sectionHeaderContainer}>
                <TouchableWithoutFeedback onPress={() => handlePress()} >
                    <Image source={arrowImage} style={styles.arrowImage} />
                </TouchableWithoutFeedback>
                <Text style={styles.headerTitle}>TV Show</Text>
            </View>
            <View style={styles.verticalSectionContainer}>

                <SectionList sections={sectionDATA} horizontal={false} showsVerticalScrollIndicator={true}
                    keyExtractor={(item, index) => item + index}
                    ListHeaderComponent={() => (
                        <View >
                            <Image source={{ uri: `${posterImage}` }} style={styles.sectionImage} />
                            <Text style={styles.headerTitle} >{resultData?.name}</Text>
                        </View>
                    )}
                    renderSectionHeader={({ section: { title } }) => (
                        <View >
                            <Text style={styles.sectionTitle} >{title}</Text>
                        </View>
                    )}
                    renderItem={({ item }) => {
                        return (
                            <View >
                                <Text style={styles.sectionDescription} >{item}</Text>
                            </View>
                        )
                    }}
                    ListFooterComponent={<DropDown showID={props.status.showID} />}
                >
                </SectionList>
            </View>
        </View>
    );
}