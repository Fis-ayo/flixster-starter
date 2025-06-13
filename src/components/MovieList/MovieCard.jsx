import "../MovieList/MovieCard.css";
import { useState, useEffect } from "react";
import { FaEyeSlash, FaRegStar, FaStar, FaCheckCircle } from "react-icons/fa";
import { favoritesUtils, watchedUtils } from "../../utils/localStorageUtils";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500";

export default function MovieCard({
  item,
  onClick,
  isFavorited = false,
unFavorited = () => {},
  isWatched = false,
  unWatched,
}) {
  const [isSeen, setIsSeen] = useState(isWatched);
  const [isFavorite, setIsFavorite] = useState(isFavorited);

  useEffect(() => {
    if (!isFavorited) setIsFavorite(favoritesUtils.exist(item.id));
    if (!isWatched) setIsSeen(watchedUtils.exist(item.id));
  }, [item.id]);

  const toggleWatched = (e) => {
    e.stopPropagation();
    if (isSeen) {
      console.log("toggleWatched item:", item);
      console.log("toggleWatched item.id:", item.id)
      watchedUtils.remove(item.id);
      unWatched?.();
    } else {
      const movie = {
        id: item.id,
        title: item.title,
        poster_path: item.poster_path,
        vote_average: item.vote_average,
      };
      watchedUtils.save(movie);
    }
    setIsSeen(!isSeen);
  };

  const toggleFavorite = (e) => {
    e.stopPropagation();
    if (isFavorite) {
    
      favoritesUtils.remove(item.id);
      unFavorited?.();
    } else {
      const movie = {
        id: item.id,
        title: item.title,
        poster_path: item.poster_path,
        vote_average: item.vote_average,
      };
      favoritesUtils.save(movie);
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <>
      <div className="movie-card">
        <div className="image-wrapper">
          <img
            className="poster"
            src={`${IMG_BASE_URL}${item.poster_path}`}
            alt={"Cover of " + item.title}
            onClick={onClick}
          />
          <div className="card-icons">
            <div onClick={toggleWatched} className="icon watched-icon">
              {isSeen ? <FaCheckCircle /> : <FaEyeSlash />}
            </div>
            <div onClick={toggleFavorite} className="icon favorite-icon">
              {isFavorite ? <FaStar /> : <FaRegStar />}
            </div>
          </div>
        </div>

        <div className="card-details">
          <h2>{item.title}</h2>
          <p>Rating: {item.vote_average}</p>
        </div>
      </div>
    </>
  );
}
