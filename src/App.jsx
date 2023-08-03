import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Search from "./pages/Search";
import { createContext } from "react";
import { useState } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/search",
    element: <Search />,
  },
]);

export const SearchContext = createContext();

function App() {
  const [search, setSearch] = useState("");
  const [searchItems, setSearchItems] = useState({});
  return (
    <>
      <SearchContext.Provider
        value={{ search, setSearch, searchItems, setSearchItems }}>
        <RouterProvider router={router} />
      </SearchContext.Provider>
    </>
  );
}

export default App;
