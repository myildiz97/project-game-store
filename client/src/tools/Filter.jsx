import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { GameContext } from "../pages/Games";

const Filter = () => {
  const { categories, setCategory } = useContext(GameContext);

  const cF = categories ? true : false;
  const act = categories ? categories : "";

  const [clearFilter, setClearFilter] = useState(cF);
  const [active, setActive] = useState(act);
  
  const handleClick = (ctg) => {
    setClearFilter(true);
    setActive(ctg);
    setCategory(ctg);
  };
    
  const handleClear = () => {
    setClearFilter(false);
    setActive("");
    setCategory("");
  };
  
  let categoriesArr = ["FPS", "Shooter", "Multiplayer", "Singleplayer","Competitive",
    "eSports", "Open+World", "Crime", "Action", "Simulation", "Driving", "Strategy",
    "Economy", "Sports", "PvP", "Western", "Adventure", "RPG", 
    "Souls-like", "Fantasy"
  ];

  const activeStyle = {
    textDecoration: "underline",
    color: "#d90429",
    fontSize: "1.25em"
  };

  return (
    <div className="filter-container">  
      <div className="filter-btns">
        {categoriesArr.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' })).map((category, index) => {
          return (
            <NavLink
              key={index}
              to={{
                pathname: "/games",
                search: `?categories=${category}`,
              }}
              onClick={() => handleClick(category)}
              style={ active === category ? activeStyle : null}
            >
              {category === "Open+World" ? "Open World" : category}
            </NavLink>
          )
        })}
      </div>
    {clearFilter && 
      <Link to="/games" onClick={handleClear} className="filter-clear">
        Clear Filter
      </Link>
    }
    </div>
  );
};

export default Filter;