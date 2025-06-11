import React,{useState} from "react"
import {FaSearch, FaTimes} from 'react-icons/fa'
import './SearchBar.css'


export default function SearchBar({onSearch, onSearchClick}){
    const [searchQuery, setSearchQuery] =  useState("")
    const [showClearButton, setShowClearButton] = useState(false)

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
        setShowClearButton(event.target.value.length > 0)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(searchQuery){
            setSearchQuery(searchQuery.trim())
            onSearch(searchQuery.trim());
        }
    };

    const handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            e.preventDefault();
            if(searchQuery) {
                setSearchQuery(searchQuery.trim())
                onSearch(searchQuery.trim());
            }
        }
    };

    const handleClick = () => {
        onSearchClick();
    }

    const handleClear = (e) => {
        setSearchQuery('');
        onSearch('');
        setShowClearButton(false)
    }

    return (
        <form onSubmit={handleSubmit} className="search-container">
            <input 
                type="text"
                placeholder="Search for movies..."
                value={searchQuery}
                onClick={handleClick}
                onKeyDown={handleKeyPress}
                onChange={handleSearchChange}
            />
            {showClearButton && 
            <button onClick={handleClear}><FaTimes /></button>}

            <button type="submit"><FaSearch /></button>


            
        </form>
    )
}