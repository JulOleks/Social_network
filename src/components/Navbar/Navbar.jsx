import React from "react";
import {NavLink} from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="nav-items">
        <li className="active nav-items__item">
          <NavLink
            to="/profile"
            
            className="nav-items__link"
            rel="noopener noreferrer"
          >
            Profile
          </NavLink>
        </li>
        <li className="nav-items__item">
          <NavLink
            to="/dialogs"
            
            className="nav-items__link"
            rel="noopener noreferrer"
            >
            Messages
          </NavLink>
        </li>
        <li className="nav-items__item">
          <NavLink
            to="/news"
            className="nav-items__link"
            rel="noopener noreferrer"
          >
            News
          </NavLink>
        </li>
        <li className="nav-items__item">
          <NavLink
            to="/music"
            className="nav-items__link"
            rel="noopener noreferrer"
          >
            Music
          </NavLink>
        </li>
        <li className="nav-items__item">
          <NavLink
            to="/settings"
            className="nav-items__link"
            rel="noopener noreferrer"
          >
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
