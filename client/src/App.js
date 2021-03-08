import React from "react";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Home from "./Home";
import NotFound from "./NotFound";
import Auction from "./Auction";
import Header from "./Header";
import NoticeBoard from "./NoticeBoard";
import TopAuction from "./TopAuction";

function App() {
  return (
    <Router>
      <Header />
      <NoticeBoard />
      <TopAuction />
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