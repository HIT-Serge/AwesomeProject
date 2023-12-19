// COMPONENTS

const SectionItem: React.FC<SectionItemProps> = (props: SectionItemProps) => {

    return (
        <View >
            <Text style={styles.sectionDescription} >{props.item}</Text>
        </View>
    );
};

const SectionHeader: React.FC<SectionHeaderProps> = (props: SectionHeaderProps) => {

    return (
        <View >
            <Text style={styles.sectionTitle} >{props.section.title}</Text>
        </View>
    )
}
const ListHeader: React.FC<ListHeaderProps> = (props: ListHeaderProps) => {

    return (
        <View >
            <Image source={{ uri: `${props.image}` }} style={styles.sectionImage} />
            <Text style={styles.headerTitle} >{props.title}</Text>
        </View>

    )
}
const UniqueKey: React.FC<UniqueKeyProps> = (props: UniqueKeyProps) => {

    let combiOfItemAndIndex: string = props.item.substring(0, props.item.indexOf(",")) + props.index;
    let uniqueKey: string = combiOfItemAndIndex.replaceAll(" ", "").replaceAll(".", "");

    return (uniqueKey);
}

export { SectionItem, SectionHeader, ListHeader, UniqueKey };

// STYLES

const styles = StyleSheet.create({
    headerTitle: {
        fontSize: 36,
        fontWeight: '900',
        color: 'white',
        width: '100%',
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',

    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: 'white',
        width: '100%',
        marginVertical: 10,

    },
    sectionDescription: {
        display: 'flex',
        flexDirection: 'row',
        fontSize: 18,
        fontWeight: '400',
        color: 'white',
    },
    sectionImage: {
        width: "100%",
        aspectRatio: 1 / 1,
    },
});



//TYPES

type SectionItemProps = { item: string };
type SectionHeaderProps = { section: { title: string } };
type ListHeaderProps = { image: string, title: string };
type UniqueKeyProps = { item: string, index: number };

// IMPORTS
import { FlatList, Image, ImageSourcePropType, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableWithoutFeedback, useColorScheme, TextInput, View, SectionList, } from 'react-native';
import React, { useState, useEffect, useContext, createContext, } from 'react';
