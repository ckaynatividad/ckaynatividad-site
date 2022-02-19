import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './views/About/About';
import Home from './views/Home';
import Apps from './views/Projects/Apps';
import Arts from './views/Projects/Arts';
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/apps" component={Apps} />
          <Route exact path="/art" component={Arts} />
        </Switch>
      </BrowserRouter>
      <Home />
    </div>
  );
}
