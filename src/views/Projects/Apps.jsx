import React from 'react';
import { Link } from 'react-router-dom';
import './Apps.css';

export default function AppsList({ apps }) {
  return (
    <div className="apps">
      {apps.map((app) => (
        <a className="appCard" key={app.id} href={app.url}>
          <img className="appImg" src={app.img} />
          <div className="content">
            <div className="title">
              <h2>{app.title}</h2>
              <p className="date">{app.date}</p>
            </div>
            <p className="desc">{app.desc}</p>
            <br></br>
            <br></br>
            <p className="duties">{app.duties}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
