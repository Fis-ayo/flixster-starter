import { FaSearch, FaTimes } from "react-icons/fa";
import "./SearchBar.css";

export default function SearchBar({
  onSearch,
  onSearchClick,
  searchQuery,
  setSearchQuery,
  onClose
}) {

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery) {
      setSearchQuery(searchQuery.trim());
      onSearch(searchQuery.trim());
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (searchQuery) {
        setSearchQuery(searchQuery.trim());
        onSearch(searchQuery.trim());
      }
    }
  };

  const handleClick = () => {
    onSearchClick();
  };

  const handleClear = (e) => {
    setSearchQuery("");
    onSearch("");
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="search-container">
      <button className="search-btn" type="submit">
        <FaSearch className="search-icon"/>
      </button>
      <input
        className="search-input"
        type="text"
        placeholder="Search for movies..."
        value={searchQuery}
        onClick={handleClick}
        onKeyDown={handleKeyPress}
        onChange={handleSearchChange}
      />
        <button className="clear-btn" onClick={handleClear}>
          <FaTimes />
        </button>

      
    </form>
  );
}
