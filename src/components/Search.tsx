import type { changeEvent, searchProps } from "../utils/types";

const Search = ({ searchQuery, setSearchQuery }: searchProps) => {
  const handleSearchChange = (e: changeEvent) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="search">
      <div>
        <img src="search.svg" alt="search" />
        <input
          type="text"
          placeholder="Search through thousands of movies"
          value={searchQuery}
          onChange={(e) => handleSearchChange(e)}
        />
      </div>
    </div>
  );
};

export default Search;
