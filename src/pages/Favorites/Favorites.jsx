import { useState, useEffect } from "react";
import { favoritesUtils } from "../../utils/localStorageUtils";
import MovieCard from "../../components/MovieList/MovieCard";
import "./Favorites.css"

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(favoritesUtils.get());
  }, []);

  const handleUnFavorited = (id) => {
    favoritesUtils.remove(id);
    const updated = favorites.filter((movie) => movie.id !== id);
    setFavorites(updated);
  };

  return (
    <div>
      <h2>Favorites</h2>
      <div className="movies-container">
        {favorites.length === 0 ? (
          <p>No liked items yet</p>
        ) : (
          favorites.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              item={movie}
              isFavorited={true}
              unFavorited={() => handleUnFavorited(movie.id)}
            />
          ))
        )}</div>
    </div>
  );
}
