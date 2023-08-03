import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { useContext } from "react";
import { SearchContext } from "../src/App";
import { useNavigate } from "react-router-dom";

function SearchInput({ buttons }) {
  const { search, setSearch, setSearchItems } = useContext(SearchContext);

  const navigate = useNavigate();

  const fetchSearchResults = async () => {
    setSearchItems({});

    const res = await fetch(
      `https://customsearch.googleapis.com/customsearch/v1?key=${
        import.meta.env.VITE_ENGINE_KEY
      }&cx=${import.meta.env.VITE_API_KEY}&q=${search}`
    );
    const data = await res.json();
    setSearchItems(data);
  };

  const enterSearch = (e) => {
    if (!search) {
      return;
    }
    if (e.key === "Enter" || e.type === "click") {
      if (buttons) {
        navigate("/search");
      }
      fetchSearchResults();
    }
  };

  return (
    <>
      <div className="search">
        <div className="search-btn">
          <AiOutlineSearch />
        </div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyUp={enterSearch}
        />
        <div className="mic">
          <BsFillMicFill />
        </div>
      </div>
      {buttons && (
        <div className="btns">
          <button className="click-search" onClick={enterSearch}>
            Google Search
          </button>
          <button className="felling-lucky">
            <a href="https://www.google.com/doodles" target="_blan">
              Im Felling Lucky
            </a>
          </button>
        </div>
      )}
    </>
  );
}
export default SearchInput;
