import React, { useState } from "react";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import NotFound from "./NotFound";
import Header from "./components/Header";
import Home from "./pages/mainpages/Home";
import LoginPage from "./pages/mainpages/LoginPage";
import LikedPage from "./pages/mainpages/LikedPage";
import InboxPage from "./pages/mainpages/InboxPage";

function App() {
  return ( 
    <Router>
      <Header/>
      <main>
        <Switch>
          <Route path="/" component={Home} exact={true}/>
          <Route path = "/login" component={LoginPage}/>
          <Route path ="/liked" component={LikedPage}/>
          <Route path ="/inbox" component={InboxPage}/>
          <Route component={NotFound} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;