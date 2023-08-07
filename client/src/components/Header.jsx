import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const activeStyleAbout = {
    textDecoration: "underline",
    color: "#118ab2",
    fontSize: "1.25em"
  };

  const activeStyleGames = {
    textDecoration: "underline",
    color: "#003049",
    fontSize: "1.25em"
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

        <NavLink
          to="/login"
          style={({isActive}) => isActive ? activeStyleGames : null}
        >
          Login
        </NavLink>
      </nav>
    </header>
  )
}

export default Header