import { useState } from 'react';
import './SearchInput.css';
import searchimg from '../img/search-white.png';

export default function SearchInput(props) {

    const [searchInput, setSearchInput] = useState(" ");

    function handleKeypress(e) {
        // 13 = enter;
        if (e.charCode === 13) {
            onItemClick();

        }
    }

    function onItemClick() {
        props.onItemClick(searchInput);
        setSearchInput("");
    }

    return (
        <div className="search">
            <input className="searchTerm" placeholder="Search here" type='text' value={searchInput}
                onKeyPress={handleKeypress} onChange={(e) => setSearchInput(e.target.value)}>
            </input>
            <button className='searchButton' onClick={onItemClick}>
                <img className='searchImg' alt='searchImg' src={searchimg}></img>
            </button>
        </div>
    )
}