// shows a reel of shows (3 Reels: Tv, Movies, Watchlist)


import Carousel from "nuka-carousel";
import Shows from './Shows';
import { ScrollView } from "react-native";

export default function ShowReel(props) {

    // if (process.env.REACT_APP_console === 'ShowReel') console.log('ShowReelOnly');



    const checksType = (typeFilled, media_type, type) => { return typeFilled != null ? typeFilled : (media_type != null ? media_type : type) };
    const wrapAround = (array) => { return array.length > 5 ? true : false };


    function showDetails(details, medium, id) {
        // console.log(details, medium, id);
        props.handleClick(details, medium, id);
    }

    function addToWatchList(type, index, medium, id) {
        props.addToWatchList(type, index, medium, id);
    }

    function onWatchlist(id) {

        let watchlistObj = {};


        const listedInWatchList = props.watchList.findIndex(obj => { return obj.id === id });
        if (listedInWatchList === -1) {

            watchlistObj = { type: 'add', index: listedInWatchList };

        } else {

            watchlistObj = { type: 'remove', index: listedInWatchList };
        }

        return watchlistObj;


    }

    return (

        <ScrollView horizontal={true}>
            {
                (props.array || []).map((episode, index) => {

                    let onWatchlistObj = onWatchlist(episode.id);



                    return (<Shows key={index} showId={episode.id}
                        type={checksType(episode.typeFilled, episode.media_type, props.type)}
                        onWatchlist={onWatchlist(episode.id)}
                        handleClick={(props) => showDetails("details", props.type, props.showId)}
                        addToWatchList={(props) => addToWatchList(onWatchlistObj.type, onWatchlistObj.index, props.type, props.showId)} />

                    )
                }
                )
            }
        </ScrollView>
    )

}