import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App(): JSX.Element {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
          <Link to="/world">Hello!</Link>
        </header>
        <Switch>
          <Route path="/world">
            <h2>Hello World</h2>
            <Link to="/">Goodbye!</Link>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
