
import { FlatList, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableWithoutFeedback, useColorScheme, TextInput, View, SectionList, } from 'react-native';
import { ApiResponse, FetchResponse, SerieObject, } from "../types";
import React, { useState, useEffect, useContext, createContext, } from 'react';
import styles from '../styles';
import Overview from './Overview';
import Details from "./Details";

type StateType = {
    detailsOn: boolean;
    showID?: number;
};
type StateContextType = {
    detailState: StateType;
    setDetailState: (value: any) => void;
};


export const StateContext = createContext<StateContextType>({ detailState: { detailsOn: false, showID: undefined }, setDetailState: () => { } });
export const Home = (): JSX.Element => {

    const [detailState, setDetailState] = useState<StateType>({ detailsOn: false, showID: undefined });
    let areDetailsOn: boolean = detailState.detailsOn;
    const changeDetailState = () => setDetailState({ ...detailState, detailsOn: !detailState.detailsOn });

    return (

        <StateContext.Provider value={{ detailState, setDetailState }}>
            {areDetailsOn ? <Details status={detailState}
                onChange={changeDetailState}
            /> : <Overview />}
        </StateContext.Provider>

    );
}
