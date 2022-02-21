import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <>
      <header>
        <ul className="nav">
          <li className="current">
            <NavLink to="/" className="active">
              HOME
            </NavLink>
          </li>
          <li className="active">
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
      <div className="Home">
        <h1>Hi, I'm Ckay. </h1>
        <p className="top-line">
          <img className="line" src={require('./assets/line2.png')} />
        </p>
        <img className="line2" src={require('./assets/line2.png')} />
        <img className="pic" src={require('./assets/pic.jpg')} />
        <div className="description">
          <p className="text">
            I am a full stack web developer with a knack for user interface
            design. I also like art and flowers. <a href="/about">⪼</a>
            <div className="icon-pic">
              <a href="https://www.linkedin.com/in/ckaynatividad/">
                <img
                  className="icon"
                  src={require('./assets/linked.png')}
                  alt=""
                />
              </a>
              <a href="https://github.com/ckaynatividad">
                <img
                  className="icon2"
                  src={require('./assets/github.png')}
                  alt=""
                />
              </a>
            </div>
          </p>
        </div>
      </div>
    </>
  );
}
