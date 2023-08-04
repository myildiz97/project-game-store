import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const GameDetails = () => {
  const [game, setGame] = useState(null);
  const [seeMore, setSeeMore] = useState(false);
  const [seeMoreText, setSeeMoreText] = useState("More...");

  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://project-game.onrender.com/games/${id}`)
      .then((res) => setGame(res.data[0]))
      .catch((error) => console.error("Error fetching game:", error));
  }, [id]);

  return (
    <div className="gameDetails">
      <img src={game?.imgUrl} alt={game?.title} />
      <div className="desc">
        <h2>{game?.title}</h2>
        <p>
          {game?.description}
          <button onClick={() => {
            setSeeMore(prev => !prev);
            seeMore ? setSeeMoreText("More...") : setSeeMoreText("Hide...");
          }}>
            {seeMoreText}
          </button>
        </p>
      </div>
      {seeMore && (
        <div className="developer">
          <span><span>Publisher: </span> {game?.publisher}</span>
          <span><span>Developer: </span> {game?.developer}</span>
          <span><span>Release Date: </span> {game?.releaseDate}</span>
        </div>
      )}
      <div className="categories">
        <span>Categories: </span>
        <span>{game?.categories.join(", ")}</span>
      </div>
      <div className="buy">
        <span><span>Price: </span> {game?.price}</span>
        <button>Buy Now</button>
      </div>
    </div>
  )
}

export default GameDetails