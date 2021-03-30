import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
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
