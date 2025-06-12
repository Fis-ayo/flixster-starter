import { useState, useEffect } from "react";
import { watchedUtils } from "../../utils/localStorageUtils";
import MovieCard from "../../components/MovieList/MovieCard";

export default function Watched() {
  const [watched, setWatched] = useState([]);

  useEffect(() => {
    setWatched(watchedUtils.get());
  }, []);

  const handleUnWatched = (id) => {
    watchedUtils.remove(id);
    const updated = watched.filter((movie) => movie.id !== id);
    setWatched(updated);
  };

  return (
    <div>
      <h2>Watched List</h2>
      {watched.length === 0 ? (
        <p>Add to Watched List</p>
      ) : (
        watched.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              id={movie.id}
              item={movie}
              isWatched={true}
              unWatched={() => handleUnWatched(movie.id)}
            />
          );
        })
      )};
    </div>
  );
}
