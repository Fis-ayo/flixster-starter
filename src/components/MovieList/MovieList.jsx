import { fetchNowPlaying } from "../../services/moviesAPI";
import React, {useEffect, useState} from 'react'
import './MovieList.css'
import MovieCard from "./MovieCard";

export default function MovieList() {
    const [movies, setMovies] = useState([])
    const [loading, setloading] = useState(true)
    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true)

    useEffect(() => {
        const getData = async () => {
            const results = await fetchNowPlaying(page);
            setMovies(results);
            setloading(false);
        }
        getData();
    }, [])

    const loadMoreMovies = async() => {
        const nextPage = page+1
        const results = await fetchNowPlaying(nextPage);

        if(page >= 278) {
            setHasMore(false)
        }
        setMovies((movies) => [...movies, ...results]);
        setPage(nextPage);
    }

    if (loading) return <p>Loading movies...</p>

    return (
        <>
        <div className="movieList-container">
            {movies.map((movie, index) => (
                <MovieCard 
                key={`${movie.id}-${index}`}
                item={movie} 
                />
                )
            )}
        </div>
        { hasMore ? 
            <button className="loadMore-btn" onClick={loadMoreMovies}>Load Movies</button> : <p>No more movies</p>
        }
        </>
    )

}
