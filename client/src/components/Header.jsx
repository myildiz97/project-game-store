import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const activeStyleAbout = {
    textDecoration: "underline",
    color: "#118ab2",
    fontSize: "1.25rem"
  };

  const activeStyleGames = {
    textDecoration: "underline",
    color: "#ef476f",
    fontSize: "1.25rem"
  };

  return (
    <header>
      <Link className="header-logo" to="/">#GameStore</Link>
      <nav>
        <NavLink
          to="/about"
          style={({isActive}) => isActive ? activeStyleAbout : null}
        >
          About
        </NavLink>

        <NavLink
          to="/games"
          style={({isActive}) => isActive ? activeStyleGames : null}
        >
          Games
        </NavLink>
      </nav>
    </header>
  )
}

export default Header