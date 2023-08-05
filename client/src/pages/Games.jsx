import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "../tools/Loader.jsx";
import SearchBar from "../tools/SearchBar.jsx";

export const GameContext = createContext();

const Games = () => {
  const [games, setGames] = useState([]);
  const [defGames, setDefGames] = useState([]);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    axios.get("https://project-game.onrender.com/games")
      .then((res) => {
        setGames(res.data);
        setDefGames(res.data);
      })
      .catch((error) => console.error("Error fetching games:", error));
  }, []);
  
  return (
    <GameContext.Provider value={{ defGames, setGames, setNotFound }}>
      <div className="games">
        <h1>Unmissable Gaming Gems: The Best Selection of Must Play Games</h1>
        <hr />
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
            {games?.map((game) => {
              const { id, title, imgUrl, categories } = game;
              return (
                <div key={id} className="game">
                  <img src={imgUrl} alt={title} />
                  <h3>{title}</h3>
                  <div>
                    <span>Categories: </span>
                    <span>{categories.join(", ")}</span>
                  </div>
                  <Link to={`/games/${id}`}>See more details...</Link>
                  {id !== games.length && <hr />}
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