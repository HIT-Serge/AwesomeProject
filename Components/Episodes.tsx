
// COMPONENTS
export default function Episodes({ showID, seasonNumber }: EpisodeProps) {

    // fetchting api themoviedb
    const response = useFetch(`https://api.themoviedb.org/3/tv/${showID}/season/${seasonNumber}`) as FetchResponse;
    const loading = response.loading;
    const data = response.data;
    const resultData = data as unknown as SerieEpisodesObject;
    const episodes: Episode[] = resultData?.episodes;

    // state episodes
    const [currentEpisodes, setCurrentEpisodes] = useState<Episode[]>();
    useEffect(() => { if (episodes) setCurrentEpisodes(episodes) }, [episodes]);

    if (!loading) {

        return (
            <View>
                <FlatList alwaysBounceVertical={false}
                    data={currentEpisodes}

                    renderItem={itemData => {
                        return (
                            <View style={styles.episodeContainer}>
                                <View style={{ flex: 1, marginRight: 8 }}>
                                    <Image style={{ aspectRatio: 1 / 1, }} source={{ uri: `https://image.tmdb.org/t/p/w500/${itemData.item.still_path}` }} />
                                    <Text style={{ color: 'white', fontWeight: "bold" }}>{itemData.item.air_date}</Text>
                                    <Text style={{ color: 'white' }}>{itemData.item.runtime}m</Text>
                                </View>
                                <View style={{ flex: 2 }} >
                                    <Text style={{ color: 'white', fontWeight: "bold" }}>{itemData.item.episode_number}. {itemData.item.name} { } </Text>
                                    <Text style={{ color: 'white' }}>{itemData.item.overview.substring(0, 200)}</Text>
                                </View>
                            </View>
                        )
                    }}
                />
            </View>
        )
    }
}

// TYPES


type EpisodeProps = {

    showID: number | undefined;
    seasonNumber: number | undefined;
}


// type EpisodeProps = PropsWithChildren<{

//     showID: number | undefined;
//     seasonNumber: number | undefined;
// }
// >


// STYLES

const styles = StyleSheet.create({
    episodeContainer: {
        display: 'flex',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'white',
        marginVertical: 3,
        padding: 5,
    }

})

// IMPORTS

import { FlatList, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableWithoutFeedback, useColorScheme, TextInput, View, SectionList, } from 'react-native';
import React, { useState, useEffect, useContext, createContext, useRef, PropsWithChildren } from 'react';
import { ApiResponse, Episode, FetchResponse, SerieDetailObject, SerieObject, SerieEpisodesObject, Season, } from "../Types/types";
import useFetch from "./useFetch";
// import styles from "../Styles/styles";
