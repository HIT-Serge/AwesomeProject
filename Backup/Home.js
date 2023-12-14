import useFetch from "./useFetch";
import { useReducer } from 'react';
import ShowDetails from "./ShowDetails";
import BackButton from '../src/img/arrow.png';
import ShowReel from "./ShowReel";
import { styles } from '../styles';
import { Dimensions } from 'react-native';


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



export default function Netnietflix() {

    // Get top 20 of populair tv shows
    const [tvArray] = useFetch("https://api.themoviedb.org/3/tv/popular");
    const [moviesArray] = useFetch("https://api.themoviedb.org/3/movie/popular");
    const screenHeight = Dimensions.get('window').height;

    // localstorage gets the current state as a string which then is parsed into objects to put in the watchlistarray
    // let stateAsString = localStorage.getItem('state');
    // let watchList = JSON.parse(stateAsString);

    let watchList = null;

    if (watchList == null) {
        watchList = [];
    }


    const initialState = {
        id: undefined,
        typeFilled: undefined,
        details: false,
        season: 1
    }
    const [state, dispatch] = useReducer(reducer, initialState);
    // reducer shows details or not, adds or removes from watchlist
    function reducer(state, action) {

        let currentObject;


        switch (action.type) {
            // Shows showdetails (Renders Component ShowDetails via Return on Display)
            case 'details':
                return { ...state, id: action.id, typeFilled: action.medium, details: true };

            // Shows oversight of the shows (Renders Components Showreels withs  via Return on Display)
            case 'nodetails':
                return { ...state, details: false };
            // Adds show to watchlist (Puts id of a show into watchlist array and stores this watchlist locally (stringify necessary))
            case 'add':

                currentObject = { ...state, id: action.id, typeFilled: action.medium };
                watchList.push(currentObject);
                localStorage.setItem('state', JSON.stringify(watchList));
                return currentObject;
            // Remove show from watchlist (By comparing the show id with the watchlist and removing that item (new watchlist stored locally (stringify necessary)))             
            case 'remove':
                // const indexToRemove = watchList.findIndex(obj => {return obj.id === action.id});                
                watchList.splice(action.index, 1);
                localStorage.setItem('state', JSON.stringify(watchList));
                return { ...state };
            default: throw new Error();


        }

    }

    function ReturnOnDisplay() {


        const media = state.typeFilled === 'tv' ? 'TV Show' : 'Movie';


        if (state.details === false) {

            return (
                <>
                    <ScrollView style={{ height: screenHeight }} >
                        <Text>Popular TV Shows</Text>
                        <ShowReel type='tv' array={tvArray.results} watchList={watchList}
                            handleClick={(details, medium, id) => dispatch({ type: details, medium: medium, id: id })}
                            addToWatchList={(type, index, medium, id) => dispatch({ type: type, index: index, medium: medium, id: id })} />

                        <Text>Popular Movies</Text>
                        <ShowReel type='movie' array={moviesArray.results} watchList={watchList}
                            handleClick={(details, medium, id) => dispatch({ type: details, medium: medium, id: id })}
                            addToWatchList={(type, index, medium, id) => dispatch({ type: type, index: index, medium: medium, id: id })} />
                        {/* <Text>Watchlist</Text>
                        <ShowReel type='watchlist' array={watchList} watchList={watchList}
                            handleClick={(details, medium, id) => dispatch({ type: details, medium: medium, id: id })}
                            addToWatchList={(type, index, medium, id) => dispatch({ type: type, index: index, medium: medium, id: id })} /> */}
                    </ScrollView>

                </>
            );


        } else {

            return (
                <>

                    {/* <div className='home'> */}
                    <View>
                        <Image className='backbutton' alt='backbutton' source={BackButton}
                            onClick={() => { dispatch({ type: 'nodetails' }) }} />
                        <Text>{media}</Text>
                        {/* <hr /> */}
                        <ShowDetails id={state.id} media={state.typeFilled} />
                    </View>
                    {/* </div> */}
                </>)
        }
    }
    return (
        <ReturnOnDisplay />
    )
}



// Creates an array of objects which are unique
// const uniqueData = [...new Map((props.array || []).map((item) => {return [item["id"], item]})).values()];
// const uniqueData = [...new Set((props.array || []).map((item) => {return item["id"]}))];