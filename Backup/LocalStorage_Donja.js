import useFetch from "./useFetch";
import Carousel from "nuka-carousel";
import Shows, { SingleShow } from './Shows';
import { useState, useReducer } from 'react';


export default function LocalStorage() 
{  

    // Get top 20 of populair tv shows
    const [data] = useFetch("https://api.themoviedb.org/3/tv/popular");

    // Haal de watchlist uit de localStorage en converteer hem van string object naar array object
    const stringifiedWatchlist = localStorage.getItem('watchlist');
    let watchlistObject = JSON.parse(stringifiedWatchlist);    
    if ( watchlistObject == null )
        watchlistObject = [];
 
    const watchReducer = (state,action) => {
        
        switch (action.type) {
            case 'add':
                let movie = { id: action.id, type: action.movieType };
                
                const tmpObject = [...state, movie];
                // set watchlist in localStorage
                localStorage.setItem("watchlist", JSON.stringify(tmpObject));
                return tmpObject;                            
            case 'remove':
                const myObjectIndex = state.findIndex(obj => {
                    return obj.id == action.id
                });   

                if ( myObjectIndex != -1 )
                {
                    const myTmpArray = [...state];
                    const myArray = myTmpArray.splice(myObjectIndex,1);
    
                    localStorage.clear();
                    localStorage.setItem("watchlist", JSON.stringify(myTmpArray));
                    return myTmpArray;
                }
            default:
                return [];
        }
    };

    const [watchlistData, dispatchWatch] = useReducer( watchReducer, watchlistObject );

    function addMovieToWatchlist(id, movieType, inWatchlist) {
            const action = inWatchlist ? 'remove' : 'add';
            dispatchWatch({ type: action, id: id, movieType: movieType});
    }

    function inWatchlist(id) {   
        const bReturn = watchlistData.findIndex(obj => {
            return obj.id == id
          });
        return (bReturn != -1);
    };

    return (
        <>
            <div className="carousel">
                <h1>Popular TV Shows</h1>
                <Carousel slidesToShow={5} wrapAround={true}>
                    {
                        (data.results || []).map((tvshow, index) => (
                            <Shows inWatchlist={inWatchlist(tvshow.id)} key={index} type="SHOW" showId={tvshow.id}                                 
                                addMovieToWatchlist={addMovieToWatchlist} />
                        ))
                    }
                </Carousel>
                <br />
            </div>
            <div className="carousel">
                <h1>Watchlist</h1>
                <Carousel className="carousel" slidesToShow={watchlistData.length > 4? 5 : watchlistData.length } wrapAround={true}>
                {                        
                    (watchlistData || []).map((movie, index) => {                            
                        return (
                            <div key={movie.id}>{movie.id} {movie.type}</div>
                        )
                    })
                }
                </Carousel>
            </div>                 
        </>
    );
}