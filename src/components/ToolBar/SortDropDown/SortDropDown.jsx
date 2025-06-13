import "./SortDropDown.css"

const sortOptions = [
  { label: "Title (A-Z)", value: "title" },
  { label: "Release date (Newest-Oldest)", value: "release_date" },
  { label: "Rating (highest-lowest)", value: "vote_average" },
];

export default function SortDropDown({ onSortChange }) {
  const handleSort = (e) => {
    onSortChange(e.target.value);
  };
  return (
    <div className="sort-wrapper">
      <select className="sort-dropdown" onChange={handleSort}>
        <option value="">Sort by</option>
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
