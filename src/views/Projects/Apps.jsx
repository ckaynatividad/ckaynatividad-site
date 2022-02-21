import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Apps.css';

import AppsList from '../../components/Projects/AppsList';
import { appsData } from '../../services/data';

export default function Apps() {
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
      <div className="appsApp">
        <AppsList apps={appsData} />
      </div>
    </>
  );
}
