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
        <p className="chime">
          <img className="line" src={require('.//line2.png')} alt="" />{' '}
        </p>
        <img className="line2" src={require('.//line2.png')} alt="" />
        <img className="pic" src={require('.//pic.jpg')} alt="" />
        <div className="description">
          <p className="text">
            Full stack web developer with a knack for user interface design. I
            also like art and flowers.
            <p className="city">Based in Portland, Oregon.</p>
            <div className="icon-pic">
              <a href="https://www.linkedin.com/in/ckaynatividad/">
                <img className="icon" src={require('.//insta.png')} alt="" />
              </a>
              <a href="https://github.com/ckaynatividad">
                <img className="icon2" src={require('.//github.png')} alt="" />
              </a>
            </div>
          </p>
        </div>
      </div>
    </>
  );
}
