import { fetchNowPlaying, movieDetails } from "../../services/moviesAPI";
import MovieModal from "../MovieModal/MovieModal";
import React, { useEffect, useState } from 'react'
import './MovieList.css'
import MovieCard from "./MovieCard";

export default function MovieList({ movies, page, setPage, setMovies, loading }) {
    const [hasMore, setHasMore] = useState(true)
    const [clickedMovie, setClickedMovie] = useState(null)

    const loadMoreMovies = async () => {
        const nextPage = page + 1
        const results = await fetchNowPlaying(nextPage);

        if (page >= results.total_pages) {
            setHasMore(false)
        }
        setMovies((movies) => [...movies, ...results]);
        setPage(nextPage);
    }

    const handleMovieClick = async(movieID) => {
        const results = await movieDetails(movieID)
        setClickedMovie(results)
    }


    if (loading) return <p>Loading movies...</p>

    return (
        <>
            <div className="movieList-container">
                {movies.map((movie, index) => (
                    <MovieCard
                        key={`${movie.id}-${index}`}
                        item={movie} 
                        onClick={() => handleMovieClick(movie.id)}
                    />
                )
                )}
            </div>


            {/* Remove the add more component from here */}

            {hasMore ?
                <button className="loadMore-btn" onClick={loadMoreMovies}>Load Movies</button> : <p>No more movies</p>
            }

            {clickedMovie && 
            (<MovieModal movie={clickedMovie} onClose={() => setClickedMovie(null)}/>)
            }
        </>
    )

}
