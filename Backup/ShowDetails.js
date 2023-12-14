import useFetch from "./useFetch";
import noImage from "../src/img/noImageAvailable.jpg";
// import { CircularProgressbar } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';
import { useState } from 'react';
// import Episodes from "./Episodes";
import Seasons from "./Seasons";
import Cast from "./Cast";
import Trailers from "./Trailers";
import SimilarMovies from "./SimilarMovies";
import { POSTER_BASE_URL, TITLE } from '@env';

import {
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

export default function ShowDetails({ id, media }) {

    const [ID, setID] = useState(id);

    const [data] = useFetch(`https://api.themoviedb.org/3/${media}/${ID}`);



    const mainTitleData = media === 'tv' ? data.name : data.title;
    const mainTitle = mainTitleData === undefined || mainTitleData === null ? '' : mainTitleData;
    const releaseDateData = media === 'tv' ? data.first_air_date : data.release_date;
    const releaseDate = releaseDateData === undefined || releaseDateData === null ? '' : new Date(releaseDateData).getFullYear();
    const genres = data.genres === undefined || data.genres === null ? '' : asStringOrArray(data.genres, '', true);
    const creators = data.created_by === undefined || data.created_by === null ? '' : asStringOrArray(data.created_by, 'Creators', true);


    // const poster = data.poster_path === undefined || data.poster_path === null ? noImage : "https://image.tmdb.org/t/p/w500" + data.poster_path;
    const poster = data.poster_path === undefined || data.poster_path === null ? noImage
        : POSTER_BASE_URL + data.poster_path;
    const overview = data.overview === undefined || data.overview === '' ? 'No information available' : data.overview;
    const userScore = data.vote_average === undefined || data.vote_average === '' ? null : data.vote_average;


    const [seasonNumber, setSeasonNumber] = useState();
    const numberOfSeasons = data.seasons === undefined || data.seasons === null ? '' : asStringOrArray(data.seasons, 'Season');

    const ClickHandler = (event) => setSeasonNumber(event.target.value);
    const showSimilarMovie = (movieId) => setID(movieId);

    function asStringOrArray(array, title, asString) {

        const tempArray = [];
        array.map((item) => { return tempArray.push(item.name) });
        if (asString) {
            const stringOfArray = tempArray.join(', ');
            return (
                <View>
                    <Text>{title}
                        {stringOfArray}
                    </Text>
                </View>);
        }
        else {

            return tempArray;
        }

    }


    if (media === 'tv') {

        return (
            <View className="container">
                <View className='detailposter'>
                    <Image alt='poster' source={poster} />
                </View>
                <View className='showdescription'>
                    <Text>{mainTitle} {releaseDate}</Text>
                    {genres}
                    {/* <View style={{ width: 100, height: 100, marginTop: 20 }}>
                        <CircularProgressbar value={userScore} text={`${userScore}/10`}
                            minValue='0' maxValue='10' />
                    </View> */}
                    <Text>Overview</Text>
                    <Text>{overview}
                        {creators}

                    </Text>
                    {data.seasons !== undefined && (<Seasons dataSeason={data.seasons} numberOfSeasons={numberOfSeasons} seasonNumber={seasonNumber}
                        id={ID} eventChange={ClickHandler} />)}
                </View>
            </View>
        )

    } else {

        return (
            <View className="container">
                <View className='detailposter'>
                    <Image
                        alt='poster'
                        source={poster}
                    />
                </View>
                <View className='showdescription'>
                    <Text>{mainTitle} {releaseDate}</Text>

                    {genres}
                    {/* <View style={{ width: 100, height: 100, marginTop: 20 }}>
                        <CircularProgressbar
                            value={userScore}
                            text={`${userScore}/10`}
                            minValue='0'
                            maxValue='10'
                        />
                    </View> */}
                    <Text>Overview</Text>
                    <Text>{overview}
                        {creators}

                    </Text>
                    <Cast movieId={ID} />
                    <SimilarMovies movieId={ID} handleClick={showSimilarMovie} />
                    {/* <Trailers movieId={ID} /> */}
                </View>
            </View>
        )

    }
}


