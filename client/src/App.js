import React from "react";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
import Auction from "./Auction";

function App() {
  return (
    <Router>
      <header>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/auction">
          <button>auction</button>
        </Link>
        <Link to="/users">
          <button>Users</button>
        </Link>
      </header>
      <hr />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/auction" component={Auction} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;