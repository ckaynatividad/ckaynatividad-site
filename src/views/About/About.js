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
      </header>
      <div className="about">
        <p>
          Hi! I'm an Asian-American developer born and raised in the Bay Area,
          CA. At this time I am currently based in Portland, OR.
        </p>

        <p></p>
      </div>
    </>
  );
}
