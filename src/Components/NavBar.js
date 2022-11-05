import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar-container">
        <h3>Custom Counter App</h3>

        <div className="navlinks-container">
      <NavLink
        style={({ isActive }) =>
          isActive ? { color: "red" } : { color: "black" }
        }
        to="/"
        className="navlink-btn"
      >
        Home
      </NavLink>

      <NavLink
        style={({ isActive }) =>
          isActive ? { color: "red" } : { color: "black" }
        }
        to="/errorboundarytest"
        className="navlink-btn"
      >
        ErrorBoundary-Test
      </NavLink>

      <NavLink
        style={({ isActive }) =>
          isActive ? { color: "red" } : { color: "black" }
        }
        to="/404errortest"
        className="navlink-btn"
      >
        Test-404-Error
      </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
