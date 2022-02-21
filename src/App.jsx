import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './views/Home/Home';
import Apps from './views/Projects/Apps';
import Arts from './views/Projects/Arts';
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/apps" component={Apps} />
          <Route path="/art" component={Arts} />
        </Switch>
        <footer>© 2022. Made by me.</footer>
      </BrowserRouter>
    </div>
  );
}
