import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './views/Home/Home';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
        <footer>© 2022. Made by me.</footer>
      </BrowserRouter>
    </div>
  );
}
