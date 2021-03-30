import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import GlobalStyle from './GlobalStyle';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <div>
        App Placeholder
        <Switch>
          <Route exact path="/">Home</Route>
          <Route path="/search">Search</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
