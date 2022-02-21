import React from 'react';
import { NavLink } from 'react-router-dom';

import ArtsList from '../../components/Projects/ArtsList';

export default function Arts() {
  return (
    <>
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
          <li id="current" className="dropdown">
            <a className="fakeLink">PORTFOLIO</a>
            <div className="dropdown-links">
              <a href="/apps">APPLICATIONS</a>
              <a href="/art">ART</a>
            </div>
          </li>
        </ul>
      </header>
      <div></div>
    </>
  );
}
