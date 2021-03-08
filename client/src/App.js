import React, { useState } from "react";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
import Header from "./Header";

function App() {
  return ( 
    <Router>
      <Header/>
      <hr />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;