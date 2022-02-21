import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import AppsList from '../../components/Projects/AppsList';
import ArtsList from '../../components/Projects/ArtsList';
import { appsData } from '../../services/data';
import './Home.css';

export default function Home() {
  const [scrollButton, setScrollButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        setScrollButton(true);
      } else {
        setScrollButton(false);
      }
    });
  });

  const scrollTop = () => {
    window.scrollTo({ top: 0 });
  };
  const about = useRef();
  const home = useRef();
  const apps = useRef();
  const art = useRef();

  const scrollAbout = () => about.current.scrollIntoView();
  const scrollHome = () => home.current.scrollIntoView();
  const scrollApps = () => apps.current.scrollIntoView();
  const scrollArt = () => art.current.scrollIntoView();

  return (
    <>
      {scrollButton && (
        <button onClick={scrollTop} className="top">
          ⇧
        </button>
      )}
      <header>
        <ul className="nav">
          <li>
            <a className="fakeLink" onClick={scrollHome}>
              HOME
            </a>
          </li>
          <li className="active">
            <a className="fakeLink" onClick={scrollAbout}>
              ABOUT
            </a>
          </li>
          <li className="dropdown">
            <a>PORTFOLIO</a>
            <div className="dropdown-links">
              <a className="fakeLink" onClick={scrollApps}>
                APPLICATIONS
              </a>
              <a className="fakeLink" onClick={scrollArt}>
                ART
              </a>
            </div>
          </li>
        </ul>
      </header>
      <div className="Home" ref={home}>
        <h1>Hi, I'm Ckay. </h1>
        <p className="top-line">
          <img className="line" src={require('./assets/line2.png')} />
        </p>
        <img className="line2" src={require('./assets/line2.png')} />
        <img className="pic" src={require('./assets/pic.jpg')} />
        <div className="description">
          <p className="text">
            I am a full-stack software engineer with a knack for user interface
            design. I also love art.
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
              <a href="mailto:natividad.ckay@gmail.com">
                <img
                  className="icon3"
                  src={require('./assets/plane.png')}
                  alt=""
                />
              </a>
              <a
                href="https://drive.google.com/file/d/1BPIgE8b7hTfar7jDURo-iRCylphzUL0c/view?usp=sharing"
                download="resume"
              >
                <img className="icon4" src={require('./assets/page.png')} />
              </a>
            </div>
          </p>
        </div>
      </div>
      <div ref={about} id="about">
        <p>
          Hi! I'm an Asian-American developer born and raised in the Bay Area,
          CA. At this time I am currently based in Portland, OR.
        </p>

        <p></p>
      </div>

      <div ref={apps} className="appsApp">
        <AppsList apps={appsData} />
      </div>

      <div ref={art} className="art">
        <ArtsList />
      </div>
    </>
  );
}
