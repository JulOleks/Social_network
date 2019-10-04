import React from "react";

const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="nav-items">
        <li className="active nav-items__item">
          <a
            href="/profile"
            
            className="nav-items__link"
            rel="noopener noreferrer"
          >
            Profile
          </a>
        </li>
        <li className="nav-items__item">
          <a
            href="/dialogs"
            
            className="nav-items__link"
            rel="noopener noreferrer"
            >
            Messages
          </a>
        </li>
        <li className="nav-items__item">
          <a
            href="#"
            target="_blank"
            className="nav-items__link"
            rel="noopener noreferrer"
          >
            News
          </a>
        </li>
        <li className="nav-items__item">
          <a
            href="#"
            target="_blank"
            className="nav-items__link"
            rel="noopener noreferrer"
          >
            Music
          </a>
        </li>
        <li className="nav-items__item">
          <a
            href="#"
            target="_blank"
            className="nav-items__link"
            rel="noopener noreferrer"
          >
            Settings
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
