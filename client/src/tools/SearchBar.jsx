import { useContext, useState } from "react";
import { GameContext } from "../pages/Games.jsx";
import { LiaSearchSolid } from "react-icons/lia";

const SearchBar = () => {
  const { defGames, setGames, setNotFound } = useContext(GameContext);
  const [search, setSearch] = useState("");

  const filterGames = (games, search) => games.filter(game => game.title.toLowerCase().match(search));

  const handleChange = (e) => {
    e.preventDefault();
    setNotFound(false);
    let value = e.target.value.toLowerCase();
    setSearch(value);
    if (value.length > 0) {
      const filtered = filterGames(defGames, value);
      filtered.length > 0 ? setGames(filtered) : setNotFound(true);
    } else {
      setGames(defGames);
      setNotFound(false);
    };
  };

  return (
    <div className="search-bar">
      <label htmlFor="search-bar-input">
        <LiaSearchSolid size={40} color="#d90429"/>
      </label>
      <input
        id="search-bar-input"
        type="text"
        placeholder="Red Dead Redemption 2"
        onChange={handleChange}
        value={search}
      />
    </div>
  );
};

export default SearchBar;