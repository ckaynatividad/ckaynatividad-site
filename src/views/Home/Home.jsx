import React, { useEffect, useRef, useState } from 'react';

import AppsList from '../Projects/Apps';

import { appsData } from '../../services/data';
import './Home.css';
import '../Projects/Apps.css';
import '../Projects/Arts.css';

export default function Home() {
  const [scrollButton, setScrollButton] = useState(false);

  const [isVisible, setVisible] = useState();
  useEffect(() => {
    const observer = new IntersectionObserver((posts) => {
      posts.forEach((post) => setVisible(post.isIntersecting));
    });
    observer.observe(apps.current);
    return () => observer.unobserve(apps.current);
  }, []);

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

  const home = useRef();
  const apps = useRef();
  const art = useRef();

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
            I am a full-stack software engineer and I love all things art. I
            also happen to have a knack for designing things.{' '}
            <a href="https://www.linkedin.com/in/ckaynatividad/">Say hello!</a>
            <br />
            <br />
            Based in Portland, Oregon.
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
                href="https://drive.google.com/file/d/1PQkVqUbeiiG9aCxz38R1mnmZOaPmnzUe/view?usp=sharing"
                download="resume"
              >
                <img className="icon4" src={require('./assets/page.png')} />
              </a>
            </div>
          </p>
        </div>
      </div>

      <div ref={apps} className={`appsdiv ${isVisible ? 'is-visible' : ''}`}>
        <h1>Recent Projects</h1>
        <div className="appsApp">
          <AppsList apps={appsData} />
        </div>
      </div>

      <div ref={art} className="art">
        <h1>My Art</h1>
        <embed
          src="https://ckaynat.tumblr.com/"
          width="90%"
          height="600"
        ></embed>
      </div>
    </>
  );
}
