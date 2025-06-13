import "./MovieTrailer.css"

export default function MovieTrailer({ movie }) {
  const movieTrailerNotFound = () => {
    return (
      <>
        <p>No Movie Trailer Found</p>
      </>
    );
  };

  const movieTrailerFound = () => {
    return (
      <>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${movie.trailerKey}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </>
    );
  };

  return <>{movie.trailerKey ? movieTrailerFound() : movieTrailerNotFound()}</>;
}
