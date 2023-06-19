import React from 'react'
import "../styles/Header.css"
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <img
        className="logo"
        src="https://syllabus.codeyourfuture.io/img/logo.png"
        alt="CYF"
      />
      <h1>Ctrl-Shift-Learn</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>About</li>
        <li>
          <Link to="/MyProfile">My Profile </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header