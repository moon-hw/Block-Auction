import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import NotFound from "./NotFound";
import Header from "./components/Header";
import Home from "./pages/mainpages/Home";
import LoginPage from "./pages/mainpages/LoginPage";
import LikedPage from "./pages/mainpages/LikedPage";
import InboxPage from "./pages/mainpages/InboxPage";
import MyPage from "./pages/mainpages/MyPage";
import SignUpPage from "./pages/mainpages/SignUpPage";
import AllofList from "./pages/categories/AllofList";
import AccessoryofList from "./pages/categories/AccessoryofList";
import ArtofList from "./pages/categories/ArtofList";
import BeautyofList from "./pages/categories/BeautyofList";
import ClothesofList from "./pages/categories/ClothesofList";
import DigitalofList from "./pages/categories/DigitalofList";
import InteriorofList from "./pages/categories/InteriorofList";
import SportsofList from "./pages/categories/SportsofList";
import ThingofList from "./pages/categories/ThingofList";
import PostPage from "./pages/auction/PostPage";

function App() {
  return ( 
    <Router>
      <Header/>
      <main>
        <Switch>
          <Route path="/" component={Home} exact={true}/>
          <Route path ="/login" component={LoginPage}/>
          <Route path ="/liked" component={LikedPage}/>
          <Route path ="/inbox" component={InboxPage}/>
          <Route path ="/mypage" component={MyPage}/>
          <Route path ="/signup" component={SignUpPage}/>
          <Route path="/all" component={AllofList}/>
          <Route path="/accessory" component={AccessoryofList}/>
          <Route path="/art" component={ArtofList}/>
          <Route path="/beauty" component={BeautyofList}/>
          <Route path="/clothes" component={ClothesofList}/>
          <Route path="/digital" component={DigitalofList}/>
          <Route path="/interior" component={InteriorofList}/>
          <Route path="/sports" component={SportsofList}/>
          <Route path="/thing" component={ThingofList}/>
          <Route path="/postAuction" component={PostPage}/>
          <Route component={NotFound} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;