const SearchBar = ({
  filterText = '',
  inWishListOnly = false,
  setFilterText,
  setInWishListOnly,
}) => {
  return (
    <form className="filter-form">
      <input
        className="search-input"
        placeholder="Поиск по названию"
        type="text"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <label>
        <input
          className="in-wish-list-checkbox"
          type="checkbox"
          value={inWishListOnly}
          onChange={(e) => setInWishListOnly(e.target.checked)}
        />
        Только в списке желаемого
      </label>
    </form>
  );
};

export default SearchBar;
