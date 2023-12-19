// COMPONENTS

// export default function Details({ detailsOn, showID }: StateType) {
export default function Details(props: DetailsProps): JSX.Element {

    // VARIABLES
    const response = useFetch(`https://api.themoviedb.org/3/tv/${props.status.showID}`) as FetchResponse;
    // const response = useFetch(`https://api.themoviedb.org/3/tv/${showID}`) as FetchResponse;
    const loading = response.loading;
    const data = response.data;
    const resultData = data as unknown as SerieDetailObject;
    const noImage: string = require('../Assets/noImageAvailable.jpg');
    const arrowImage: ImageSourcePropType = require('../Assets/arrow.png');
    let posterImage: string = resultData?.poster_path ? `https://image.tmdb.org/t/p/w500/${resultData?.poster_path}` : noImage;
    let genres: string[] = resultData?.genres?.map((item, index, { length }) => { return length - 1 === index ? `${item.name} ` : `${item.name}, ` });
    let createdBy: string[] = resultData?.created_by?.map((item, index, { length }) => { return length - 1 === index ? `${item.name} ` : `${item.name}, ` });
    let overview: string = resultData?.overview ?? "No overview available";
    // let sectionDATA: Section[] = [];
    let sectionDATA: Section[] = [

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


    function handlePress() {
        props.onChange();
    }

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
                    keyExtractor={(item, index) => `${item}-${index}`}
                    ListHeaderComponent={() => <ListHeader image={posterImage} title={resultData?.name} />}
                    renderSectionHeader={({ section }) => <SectionHeader section={section} />}
                    renderItem={({ item }) => <SectionItem item={item} />}
                    ListFooterComponent={<DropDown showID={props.status.showID} />}
                >
                </SectionList>
            </View>
        </View>
    );
}

// STYLES

const styles = StyleSheet.create({
    componentContainer: {
        display: 'flex',
        flexDirection: 'column',
        margin: 10,
        flex: 1,

    },
    sectionHeaderContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',

    },
    headerTitle: {
        fontSize: 36,
        fontWeight: '900',
        color: 'white',
        width: '100%',
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',

    },
    verticalSectionContainer: {
        display: 'flex',
        flexDirection: 'column',

    },
    arrowImage: {

        width: 32,
        height: 32,
        marginVertical: 10,
        marginRight: 10,

    },

});

// TYPES

type StateType = {
    detailsOn: boolean;
    showID?: number;
};
type DetailsProps = {
    status: StateType,
    onChange: () => void,
};
type Section = {
    title: string,
    data: string[],
};

// IMPORTS
import { FlatList, Image, ImageSourcePropType, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableWithoutFeedback, useColorScheme, TextInput, View, SectionList, } from 'react-native';
import React, { useState, useEffect, useContext, createContext, } from 'react';
import { ApiResponse, FetchResponse, SerieDetailObject, SerieObject, Season } from "../Types/types";
import useFetch from "./useFetch";
// import styles from "../Styles/styles";
import { StateContext } from './Home';
import DropDown from './DropDown';
import { SectionItem, SectionHeader, ListHeader, UniqueKey } from './SectionItems';





// full SectionList
{/* <SectionList sections={sectionDATA} horizontal={false} showsVerticalScrollIndicator={true} */ }

// keyExtractor={(item, index) => {
//     let combiOfItemAndIndex: string = item.substring(0, item.indexOf(",")) + index;
//     let uniqueKey: string = combiOfItemAndIndex.replaceAll(" ", "").replaceAll(".", ""); return (uniqueKey)
// }}

// ListHeaderComponent={() => (
//     <View >
//         <Image source={{ uri: `${posterImage}` }} style={styles.sectionImage} />
//         <Text style={styles.headerTitle} >{resultData?.name}</Text>
//     </View>
// )}

// renderSectionHeader={({ section }) => (
//     <View >
//         <Text style={styles.sectionTitle} >{section.title}</Text>
//     </View>
// )}

// ListFooterComponent={<DropDown showID={props.status.showID} />}

// </SectionList>
// </View>