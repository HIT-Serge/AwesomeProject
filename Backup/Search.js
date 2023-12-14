import SearchInput from "./SearchInput";
import { useFetchWithQuery } from "./useFetch";
import { useState } from "react";
import ShowReel from "./ShowReel";
import SearchPage from "./SearchPage";


export default function Search () {

    const [query, setQuery] = useState(null);
    const [page, setPage] = useState(0);
    console.log(page);
    
    
    const [searchData] = (useFetchWithQuery('https://api.themoviedb.org/3/search/multi', query, page+1));
 
    console.log(searchData);

    function onItemClick(value) {
        setQuery(value);
        // console.log(query);

    }

    function changePage(selected) {
        setPage(selected);
    }

    return (<div className="searchpage">
                <SearchInput className="searchinput" onItemClick={onItemClick} />
                {/* {searchData !== undefined && <ShowReel type='watchlist' className="showreel" array={searchData.results} watchList={watchList}/>} */}
                {searchData !== [] && <SearchPage data={searchData} changePage={changePage}/>}
            </div>
  
            )

            // handleClick={(details, medium, id)=>dispatch({type: details, medium: medium, id: id})} 
            // addToWatchList = {(type, index, medium, id)=>dispatch({type: type, index: index, medium: medium, id: id})}
}

