import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";
import Loader from "../tools/Loader.jsx";
import SearchBar from "../tools/SearchBar.jsx";
import Filter from "../tools/Filter.jsx";

export const GameContext = createContext();

const Games = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [games, setGames] = useState([]);
  const [defGames, setDefGames] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [category, setCategory] = useState("");

  const categories = searchParams.get("categories");

  const getGames = (url) => {
    axios.get(url)
      .then((res) => {
        setGames(res.data);
        setDefGames(res.data);
      })
      .catch((error) => console.error("Error fetching games:", error));
  };

  useEffect(() => {
    let url = "https://project-game.onrender.com/games";
    // let url = "http://localhost:5000/games";
    if (categories) url += `?categories=${categories}`;
    getGames(url);
  }, [searchParams]);
  
  return (
    <GameContext.Provider value={{ defGames, setGames, setNotFound, categories, setCategory }}>
      <div className="games">
        <h1>Unmissable Gaming Gems: The Best Selection of Must Play Games</h1>
        <hr />
        <Filter />
        <SearchBar />
        {
          notFound && (
            <div className="notFound">
              <p>There is no game for the search result...</p>
            </div>
          )
        }
        {!notFound && games?.length > 0 ? (
          <div className="games-wrapper">
            {games?.map((game, index) => {
              const { id, title, imgUrl, categories } = game;
              return (
                <div key={id} className="game">
                  <img src={imgUrl} alt={title} />
                  <h3>{title}</h3>
                  <div>
                    <span>Categories: </span>
                    <span>{categories.join(", ")}</span>
                  </div>
                  <Link 
                    to={`/games/${id}`}
                    state={{
                      search: `?${searchParams.toString()}`,
                      category: category
                    }}
                  >See more details...</Link>
                  {index + 1 !== games.length && <hr />}
                </div>
              )
            })}
          </div>
        ): (
          !notFound && <Loader />
        )}
      </div>
    </GameContext.Provider>
  );
};

export default Games;