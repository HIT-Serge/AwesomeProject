import useFetch from "./useFetch";
import noImage from "../src/img/noImageAvailable.jpg";
import Carousel from "nuka-carousel";
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

export default function Cast(props) {

    const [movieCastArray] = useFetch(`https://api.themoviedb.org/3//movie/${props.movieId}/credits`);
    // console.log(movieCastArray);


    return (
        <View>
            <Text>Cast</Text>
            <Carousel slidesToShow={5} wrapAround={true}>
                {
                    (movieCastArray.cast || []).map((castMember, i) => {

                        const castMemberPicture = castMember.profile_path === null ? noImage : "https://image.tmdb.org/t/p/w500" + castMember.profile_path;

                        return (
                            <View key={i}>
                                <Image key={i} alt={castMember.name} src={castMemberPicture}></Image>
                                <Text>{castMember.name}</Text>
                            </View>


                        )

                    })
                }
            </Carousel>
        </View>

    )
}