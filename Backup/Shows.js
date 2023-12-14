import Button from "./Button";
import useFetch from "./useFetch";
import noImage from "../src/img/noImageAvailable.jpg";
import Poster from "./Poster";
import styles from '../styles';
// import './Shows.css';
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

export default function Shows(props) {

    // if (process.env.REACT_APP_console === 'Shows') console.log('Shows');



    const [data] = useFetch(`https://api.themoviedb.org/3/${props.type}/${props.showId}`);
    const addToWatchList = () => { props.addToWatchList(props) }
    const lookAtDetails = () => {
        console.log(props);

        props.handleClick(props);
    }

    if (data !== undefined) {



        const title = props.type === 'movie' ? data.title : data.name;
        const poster = data.poster_path === undefined || data.poster_path === null ? noImage : "https://image.tmdb.org/t/p/w500" + data.poster_path;

        return (
            // <div className="buttonimagecontainer">
            <View>

                {/* <Button id={props.showId} onClick={addToWatchList} type={props.onWatchlist} /> */}
                <Poster data={data} poster={poster} onClick={lookAtDetails} />
                <Text style={styles.titleText}>{title}</Text>
                {/* <Text style={styles.titleText}>{data.last_air_date}</Text> */}
            </View>
            // </div>
        );
    }
}

