
// COMPONENTS
export default function DropDown({ showID }: DropDownProps): JSX.Element {

    const response = useFetch(`https://api.themoviedb.org/3/tv/${showID}`) as FetchResponse;
    const loading = response.loading;
    const data = response.data;
    const resultData = data as unknown as SerieDetailObject;
    let seasons: Season[] = resultData?.seasons;

    const [currentSeason, setCurrentSeason] = useState<number>();
    useEffect(() => { if (seasons) setCurrentSeason(seasons[0].season_number) }, [seasons]);

    const dropDownMenuHandle = (season: Season, i: number) => setCurrentSeason(season.season_number);

    return (
        <View>
            <Text style={styles.sectionTitle}>Seasons</Text>
            <SelectDropdown data={seasons}
                defaultButtonText={currentSeason === 0 ? "Extras" : `Season ${currentSeason}`}
                onSelect={(selectedItem: Season, index: number) => {
                    // handle selection
                    // console.log('hallo');
                    dropDownMenuHandle(selectedItem, index)
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return `season ${selectedItem['season_number']}`
                }}
                rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    let returnString: string = `season ${item['season_number']}` === "season 0" ? "Extras" : `Season ${item['season_number']}`;
                    return returnString;
                }} >
            </SelectDropdown>
            <Episodes showID={showID} seasonNumber={currentSeason} />
        </View>
    )
}

// TYPES
type DropDownProps = {
    showID: number | undefined,

}
// STYLES
const styles = StyleSheet.create({
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: 'white',
        width: '100%',
        marginVertical: 10,

    },

})

// IMPORTS
import { FlatList, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableWithoutFeedback, useColorScheme, TextInput, View, SectionList, } from 'react-native';
import React, { useState, useEffect, useContext, createContext, } from 'react';
import { ApiResponse, FetchResponse, SerieDetailObject, SerieObject, Season, } from "../Types/types";
import useFetch from "./useFetch";
// import styles from "../Styles/styles";
import { StateContext } from './Home';
import SelectDropdown from 'react-native-select-dropdown';
import Episodes from './Episodes';


