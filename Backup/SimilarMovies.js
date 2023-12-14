import useFetch from "./useFetch";
import noImage from "../src/img/noImageAvailable.jpg";
import Carousel from "nuka-carousel";


export default function SimilarMovies(props) {

    const [similarMoviesArray] = useFetch(`https://api.themoviedb.org/3//movie/${props.movieId}/similar`);
    // console.log(similarMoviesArray);


    function lookAtDetails(movieId) {

        props.handleClick(movieId);

    }

    return (
        <>
            <h4>Similar Movies</h4>

            <Carousel slidesToShow={5} wrapAround={true}>
                {
                    (similarMoviesArray.results || []).map((movie, i) => {


                        const moviePicture = movie.poster_path === null ? noImage : "https://image.tmdb.org/t/p/w500" + movie.poster_path;
                        // console.log(movie.id);

                        return (
                            <div key={i}>
                                <img key={i} alt={movie.title} src={moviePicture} onClick={() => { lookAtDetails(movie.id) }}></img>
                                <h3>{movie.title}</h3>
                            </div>


                        )

                    })
                }
            </Carousel>
        </>

    )
}