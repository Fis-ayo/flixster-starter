import {
  fetchNowPlaying,
  movieDetails,
  movieTrailer,
} from "../../services/moviesAPI";
import MovieModal from "../MovieModal/MovieModal";
import { useState } from "react";
import "./MovieList.css";
import MovieCard from "./MovieCard";

export default function MovieList({
  movies,
  page,
  setPage,
  setMovies,
  loading,
}) {
  const [hasMore, setHasMore] = useState(true);
  const [clickedMovie, setClickedMovie] = useState(null);

  const loadMoreMovies = async () => {
    const nextPage = page + 1;
    const results = await fetchNowPlaying(nextPage);

    if (page >= results.total_pages) {
      setHasMore(false);
    }
    setMovies((movies) => [...movies, ...results]);
    setPage(nextPage);
  };

  const handleMovieClick = async (movieID) => {
    const [details, videoResults] = await Promise.all([
      movieDetails(movieID),
      movieTrailer(movieID),
    ]);
    const trailer = videoResults?.results?.find(
      (v) => v.type === "Trailer" && v.site === "YouTube",
    );

    const fullMovieData = {
      ...details,
      trailerKey: trailer ? trailer.key : null,
    };

    setClickedMovie(fullMovieData);
  };

  if (loading) return <p>Loading movies...</p>;

  return (
    <>
      <div className="movieList-container">
        {movies.map((movie, index) => (
          <MovieCard
            key={`${movie.id}-${index}`}
            item={movie}
            onClick={() => handleMovieClick(movie.id)}
          />
        ))}
      </div>

      {hasMore ? (
        <button className="loadMore-btn" onClick={loadMoreMovies}>
          Load Movies
        </button>
      ) : (
        <p>No more movies</p>
      )}

      {clickedMovie && (
        <MovieModal
          movie={clickedMovie}
          onClose={() => setClickedMovie(null)}
        />
      )}
    </>
  );
}
