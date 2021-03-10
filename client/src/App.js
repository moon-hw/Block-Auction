import React, { useState } from "react";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Home from "./Home";
import NotFound from "./NotFound";
import Header from "./Header";
import NoticeBoard from "./NoticeBoard";
import TopAuction from "./TopAuction";
import Login from "./Login";

function App() {
  return ( 
    <Router>
      <Header />
      <NoticeBoard />
      <TopAuction />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;