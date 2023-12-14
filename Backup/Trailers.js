// import React from 'react';
import ReactPlayer from 'react-player/lazy';
import useFetch from './useFetch';
import YouTube from 'react-youtube';
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


export default function Trailers(props) {

    const [trailerArray] = useFetch(`https://api.themoviedb.org/3/movie/${props.movieId}/videos`)


    return (
        <Text> <h4>Previews</h4>
            {(trailerArray.results || []).map((trailer, i) => {

                const link = `https://www.youtube.com/watch?v=${trailer.key}`;

                return (

                    <View className='player-wrapper' key={i} >
                        <ReactPlayer
                            className='react-player'
                            url={link}
                            config={{
                                youtube: {
                                    playerVars:
                                    {
                                        'autoplay': 0,
                                        'controls': 0,
                                        'autohide': 1,
                                        'wmode': 'opaque',
                                        'origin': 'http://localhost:8100',
                                        'host': 'https://www.youtube.com'
                                    }
                                }
                            }}
                        />
                    </View >
                )
            })}
        </Text>

        // trailerArray
        // Lazy load the YouTube player
        // <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />


    )
}

{/* // <ReactPlayer key={i} url={link} width="300px" height='200px' style={{ marginRight: '20px', display: "inline-block" }} />
                    // <ReactPlayer key={i} url={link} width="300px" height='200px' style={{ marginRight: '20px', display: "inline-block" }} config={{ youtube: { playerVars: { origin: 'https://www.youtube.com' } } }} /> */}

{/* < YouTube

                        videoId={`${trailer.key}`
                        }

                    /> */}