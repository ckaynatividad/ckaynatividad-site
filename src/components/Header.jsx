import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <ul className="nav">
        <li>
          <NavLink to="/" className="active">
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="active">
            ABOUT
          </NavLink>
        </li>
        <li className="dropdown">
          <a className="fakeLink">PORTFOLIO</a>
          <div className="dropdown-links">
            <a href="/apps">APPLICATIONS</a>
            <a href="/art">ART</a>
          </div>
        </li>
      </ul>

      <ul className="icons">
        <li>twitter</li>
        <li>email</li>
      </ul>
    </header>
  );
}
