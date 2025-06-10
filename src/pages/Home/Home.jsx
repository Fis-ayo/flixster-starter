import { fetchNowPlaying, searchResult } from "../../services/moviesAPI"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import MovieList from "../../components/MovieList/MovieList"
import SearchBar from "../../components/SearchBar/SearchBar"
import SortDropDown from "../../components/SortDropDown/SortDropDown"
import NowPlaying from "../../components/SearchBar/NowPlaying"
import React, { useState, useEffect} from "react"


export default function Home() {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [playingActive, setPlayingActive] = useState(true);

    const getData = async () =>{
            const results = await fetchNowPlaying(page);
            setMovies(results);
            setLoading(false);
    }

    useEffect(() => {
        getData();
    }, []);

    const handleSearch = async(query) => {
        if(query === ''){
            setPlayingActive(false)
        }else{
            const results = await searchResult(query);
            setPlayingActive(true)
            if(results.length === 0){
                console.log ("No result found")
            }else{setMovies(results);}
            setLoading(false);
        }  
    }

    const handleSearchClick = () => {
        setPlayingActive(false);
    }

    const handleNowPlayingClick = () => {
        getData();
        //When now playing is clicked fix the issue where the input still holds the before data
        setPlayingActive(true)
    }

    const handleSortChange = (value) => {

    }

    //Error handling for where no result is found

    return (
        <div>
            <Header />
            <NowPlaying onNowPlayingClick={handleNowPlayingClick}/>
            <SearchBar onSearch={handleSearch} onSearchClick={handleSearchClick}/>
            <SortDropDown onSortChange={handleSortChange}/>
            {playingActive ?
            <MovieList movies={movies} page={page} setPage = {setPage} setMovies={setMovies} loading={loading}/>:
            <p>Search for Movies</p>
            }
            
            <Footer />
        </div>
    );
}