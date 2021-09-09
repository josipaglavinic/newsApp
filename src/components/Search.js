import React from 'react';
import './styles/search.scss';
import SearchIcon from '../icons/search.svg'
import ReorderIcon from '@material-ui/icons/Reorder';

const Search = ({ setSearch, setQuerry, search, handleMenu }) => {


    const handleInput = e => {
        setSearch(e.target.value);
    }

    const getSearch = e => {
        e.preventDefault();
        setQuerry(search);
    }

    return (
        <div className="search_container">
            <div className="mobile_search">
                <div className="my_news">News</div>
                <button className="menu_button"
                    onClick={handleMenu}
                ><ReorderIcon /></button>
            </div>
            <div className="search" >
                <form onSubmit={getSearch}>
                    <img src={SearchIcon} alt="search_icon" className="search_icon" />
                    <input
                        className="search_input"
                        type="text"
                        placeholder="Search news"
                        onChange={handleInput} />
                    <button className="search_button" onClick={getSearch}>SEARCH</button>
                </form>
            </div>
        </div>
    )
}

export default Search;
