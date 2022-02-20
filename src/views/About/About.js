import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import './About.css';

export default function About() {
  return (
    <>
      <header>
        <ul className="nav">
          <li>
            <NavLink to="/" className="active">
              HOME
            </NavLink>
          </li>
          <li className="current">
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
      <div className="about">
        <h4>About</h4>
        <p></p>
      </div>
    </>
  );
}
