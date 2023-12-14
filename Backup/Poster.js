
import {
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    useColorScheme,
    View,
} from 'react-native';

import noImageAvailable from '../src/img/noImageAvailable.jpg';
import styles from '../styles';

export default function Poster(props) {

    const transferClick = () => {
        props.onClick();
        // console.log(props.poster);
    };

    const getPosterUri = () => {

        const poster = props.poster == null ? noImageAvailable : { uri: `${props.poster}` };
        return poster;
    }

    // if (props.data !== null) {


    return (
        <TouchableOpacity onPress={transferClick}>
            <Image style={styles.image} source={getPosterUri()} className='poster' alt={props.data.name} onPress={transferClick} />
        </TouchableOpacity>


    )
    // }
}