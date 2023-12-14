
import noImage from '../src/img/noImageAvailable.jpg';
import { POSTER_BASE_URL, TITLE } from '@env';
// import './Seasons.css';
import useFetch from './useFetch';
import { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
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


function Seasons(props) {

    const [seasonNumber, setseasonNumber] = useState(props.dataSeason[0].season_number);
    const [episodeData] = useFetch(`https://api.themoviedb.org/3/tv/${props.id}/season/${seasonNumber}`);

    const eventChange = (event) => { setseasonNumber(event.target.value) }

    if (props.dataSeason !== undefined) {

        return (

            <View>
                <Text htmlFor='seasons' name='Season' id="seasonlabel">
                    <Text style={{ fontWeight: 'bold' }}>Season:</Text>

                    <Picker id='seasonselect' onChange={(e) => { eventChange(e) }} defaultValue={props.dataSeason[0].season_number}>
                        {(props.dataSeason || []).map((item) => {

                            return (

                                <Picker.Item key={item.season_number} label={item.name} value={item.season_number} />
                            );
                        })}
                    </Picker>
                </Text>
                <Episodes season={episodeData.episodes} />

            </View>


        )
    }
    else {
        return null;
    }

}



function Episodes(props) {


    if (props.season !== undefined) {

        return (
            <Text>
                <h4>Episodes</h4>
                {(props.season || []).map((episode, i) => {

                    const episodePoster = episode.still_path === null ? noImage : POSTER_BASE_URL + episode.still_path;

                    const episodeAirDate = new Date(episode.air_date).toLocaleDateString();

                    return (
                        <table className='episodetable' key={i}>
                            <tbody>
                                <tr>

                                    <td className='episodestilholder'>
                                        <img alt="episodestill" src={episodePoster} className="episodestills"></img>
                                    </td>
                                    <td className='episodeoverview'>
                                        <h4>{episode.episode_number}. {episode.name}</h4>
                                        <p>{episode.overview}</p>
                                    </td>
                                    <td className='epsiodeproperties'>
                                        <p>{episodeAirDate}</p>
                                        <p>{episode.runtime}  m</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    )

                })}
            </Text>
        )
    }
    else {
        return null;
    }

}

export { Seasons as default, Episodes };