import SearchInput from "../SearchInput";
import SearchItem from "../SearchItem";
import { useContext } from "react";
import { SearchContext } from "../App";
import Loader from "../Loader";

function Search() {
  const { searchItems } = useContext(SearchContext);
  if (Object.keys(searchItems).length === 0) {
    return <Loader />;
  }
  return (
    <div className="search-page">
      <div className="input">
        <SearchInput buttons={false} />
      </div>
      <div className="search-for">
        <p>
          You searched for -
          <span>{" " + searchItems?.queries.request[0].searchTerms}</span>
        </p>
        <p>
          results found in (
          <span>
            {searchItems?.searchInformation.formattedSearchTime + " "}
          </span>
          seconds)
        </p>
      </div>
      <div className="search-items-container">
        {searchItems?.items.map((elem, indx) => {
          return <SearchItem key={indx} {...elem} />;
        })}
      </div>
    </div>
  );
}
export default Search;
