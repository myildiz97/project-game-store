import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Games = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios.get("https://project-game.onrender.com/games")
      .then((res) => setGames(res.data))
      .catch((error) => console.error("Error fetching games:", error));
  }, []);
  
  return (
    <div className="games">
      {games.map((game) => {
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
  );
}

export default Games