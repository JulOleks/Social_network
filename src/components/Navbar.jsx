import React from "react";

const Navbar = () => {
  return (
    <nav className="nav">
      <ul>
        <li className="active">
          <a href="#" target="_blank" rel="noopener noreferrer">
            Profile
          </a>
        </li>
        <li>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Messages
          </a>
        </li>
        <li>
          <a href="#" target="_blank" rel="noopener noreferrer">
            News
          </a>
        </li>
        <li>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Music
          </a>
        </li>
        <li>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Settings
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
