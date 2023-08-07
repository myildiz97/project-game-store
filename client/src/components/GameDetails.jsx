import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { BsArrowLeftShort } from "react-icons/bs";
import Loader from "../tools/Loader.jsx";

const GameDetails = () => {
  const [game, setGame] = useState(null);
  const [seeMore, setSeeMore] = useState(false);
  const [seeMoreText, setSeeMoreText] = useState("More...");

  const { id } = useParams();
  const location = useLocation();

  const search = location.state?.search || "";
  const category = location.state?.category || "all";

  useEffect(() => {
    axios.get(`https://project-game.onrender.com/games/${id}`)
      .then((res) => setGame(res.data[0]))
      .catch((error) => console.error("Error fetching game:", error));
  }, [id]);

  return (
    <div className="gameDetails">
      <Link 
        to={`..${search}`}
        relative="path"
      >
        <BsArrowLeftShort />
        <span>Back to {category} games</span>
      </Link>
      {game ? (
        <>
          <h1>{game?.title}</h1>
          <hr />
          <img src={game?.imgUrl} alt={game?.title} />
          <p>{game?.description}</p>   
          <div className="categories">
            <span className="ctg">Categories: </span>
            <span>{game?.categories.join(", ")}</span>
            <button onClick={() => {
              setSeeMore(prev => !prev);
              seeMore ? setSeeMoreText("More...") : setSeeMoreText("Hide...");
            }}>
              {seeMoreText}
            </button>
            {seeMore && (
              <div className="developer">
                <span><span className="devs">Publisher: </span> {game?.publisher}</span>
                <span><span className="devs">Developer: </span> {game?.developer}</span>
                <span><span className="devs">Release Date: </span> {game?.releaseDate}</span>
              </div>
            )}
          </div>
          <div className="buy">
            <span><span>Price: </span> {game?.price}</span>
            <button>Buy Now</button>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default GameDetails;