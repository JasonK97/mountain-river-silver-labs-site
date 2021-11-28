import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import NavBar from "./components/navbar";

import Home from "./pages/home";
import Blog from './pages/blog'
import Contact from './pages/contact'
import Create from "./pages/create";
import Edit from "./pages/edit";
import Litters from "./pages/litters";
import NoMatch from "./pages/no-match";
import Post from "./pages/post";
import SignIn from "./pages/sign-in";

function App() {
  return (
    <Router>
      <NavBar />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path='/admin' component={SignIn} />
          <Route exact path='/blog' component={Blog} />
          <Route path='/contact-us' component={Contact} />
          <Route path="/create" component={Create} />
          <Route path='/edit/:slug' component={Edit} />
          <Route path='/litters' component={Litters} />
          <Route path="/404" component={NoMatch} />
          <Route path="/blog/:slug" component={Post} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
