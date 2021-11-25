import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";

import Home from "./pages/home";
import Blog from './pages/blog'
import Create from "./pages/create";
import Post from "./pages/post";
import NoMatch from "./pages/no-match";
import SignIn from "./pages/sign-in";
import Edit from "./pages/edit";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/blog">
          <h2>Mountain River Silver Labs</h2>
        </Link>
      </nav>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path='/blog' component={Blog} />
          <Route path="/create" component={Create} />
          <Route path='/edit/:slug' component={Edit} />
          <Route path='/sign-in' component={SignIn} />
          <Route path="/404" component={NoMatch} />
          <Route path="/blog/:slug" component={Post} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
