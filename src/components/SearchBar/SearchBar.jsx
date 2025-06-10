import React,{useState} from "react"
import {FaSearch} from 'react-icons/fa'
import './SearchBar.css'


export default function SearchBar({onSearch}){
    const [searchQuery, setSearchQuery] =  useState("")

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(searchQuery.trim()){
            onSearch(searchQuery.trim());
        }
    };

    return (
        <form onSubmit={handleSubmit} className="search-container">
            <input 
                type="text"
                placeholder="Search for movies..."
                value={searchQuery}
                onChange={handleSearchChange}
            />
            <button type="submit">
                <FaSearch />
            </button>
        </form>
    )
}