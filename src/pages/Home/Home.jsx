import { fetchNowPlaying, searchResult } from "../../services/moviesAPI";
import MovieList from "../../components/MovieList/MovieList";
import SearchBar from "../../components/ToolBar/SearchBar";
import SortDropDown from "../../components/ToolBar/SortDropDown/SortDropDown";
import NowPlaying from "../../components/ToolBar/NowPlaying";
import { useState, useEffect } from "react";
import "./Home.css"

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [playingActive, setPlayingActive] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const getData = async (specifiedPage) => {
    const results = await fetchNowPlaying(specifiedPage || page);
    setMovies(results);
    setLoading(false);
    if (specifiedPage) setPage(specifiedPage);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSearch = async (query) => {
    if (query === "") {
      setPlayingActive(false);
    } else {
      const results = await searchResult(query);
      setPlayingActive(true);
      if (results.length === 0) {
        setErrorMessage("No results");
      } else {
        setMovies(results);
      }
      setLoading(false);
    }
  };

  const handleSearchClick = () => {
    setErrorMessage("");
    setPlayingActive(false);
  };

  const handleNowPlayingClick = () => {
    setErrorMessage("");

    getData(1);
    if (searchQuery) {
      setSearchQuery("");
    }
    setPlayingActive(true);
  };

  const handleSortChange = (value) => {
    const result = movies.slice();
    switch (value) {
      case "":
        getData();
        break;
      case "title":
        result.sort((a, b) =>
          a.title.toLowerCase().localeCompare(b.title.toLowerCase()),
        );
        break;
      case "vote_average":
        result.sort((a, b) => b.vote_average - a.vote_average);
        break;
      case "release_date":
        result.sort(
          (a, b) => new Date(a.release_date) - new Date(b.release_date),
        );
        break;
    }
    setMovies(result);
  };

  return (
    <div>
      <div className="toolbar-container">
        <NowPlaying onNowPlayingClick={handleNowPlayingClick} />
        <div className="toolbar-actions">
          <SearchBar
            onSearch={handleSearch}
            onSearchClick={handleSearchClick}
            setSearchQuery={setSearchQuery}
            searchQuery={searchQuery}
            onClose = {handleNowPlayingClick}
          />
          <SortDropDown onSortChange={handleSortChange} />
        </div>
      </div>
      {playingActive ? (
        errorMessage ? (
          <p>{errorMessage}</p>
        ) : (
          <MovieList
            movies={movies}
            page={page}
            setPage={setPage}
            setMovies={setMovies}
            loading={loading}
          />
        )
      ) : (
        <p>"Search for Movies"</p>
      )}
    </div>
  );
}
