import "./MovieModal.css";
import MovieTrailer from "./MovieTrailer";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500";

export default function MovieModal({ movie, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <div className="movie-top-content">
          <img
            className="modal-img"
            src={`${IMG_BASE_URL}${movie.backdrop_path}`}
            alt={`Cover of ${movie.title}`}
          />
          <div className="movie-detail">
            <h2>{movie.title}</h2>
            <p>
              <strong>Runtime:</strong> {movie.runtime} minutes
            </p>
            <p>
              <strong>Release Date:</strong> {movie.release_date}
            </p>
            <p>
              <strong>Genres:</strong>{" "}
              {movie.genres?.map((g) => g.name).join(", ")}
            </p>
            <p>
              <strong>Rating:</strong> {movie.vote_average}
            </p>
          </div>
        </div>
        <p>{movie.overview}</p>
        <div className="movie-down-content">
          <MovieTrailer movie={movie} />
        </div>
      </div>
    </div>
  );
}
