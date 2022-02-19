import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './views/About/About';
import Home from './views/Home/Home';
import Apps from './views/Projects/Apps';
import Arts from './views/Projects/Arts';
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <ul>
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
              <a className="fakeLink">WORKS</a>
              <div className="dropdown-links">
                <a href="/apps">APPLICATIONS</a>
                <a href="/art">ART</a>
              </div>
            </li>
          </ul>
        </header>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about" component={About} />
          <Route path="/apps" component={Apps} />
          <Route path="/art" component={Arts} />
        </Switch>
        <footer>
          <p>hi</p>
        </footer>
      </BrowserRouter>
    </div>
  );
}
