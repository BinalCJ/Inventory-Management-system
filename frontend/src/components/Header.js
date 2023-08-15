import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-dark-blue sticky-nav" > 
      <a className="navbar-brand" href="/ManageItems">
        <img src=".\sxs.png" width="72px" height="60px" alt=""/>
      </a>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav" style={{ fontSize: "22px" }}>

          <li className="nav-item">
            <a className="nav-link" href="/home">
              Home
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/add">
              Add Item
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/about">
              About
            </a>
          </li>
        </ul>
      </div>
      <style>
        {`
        .navbar-dark-blue {
          background-color: #c0c6cf;
        }
      }
    `}
      </style>
    </nav>
  );
}

export default Header;
