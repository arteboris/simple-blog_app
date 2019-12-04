import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navigation from './pages/Navigation/Navigation';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import PostsPage from './pages/PostsPage/PostsPage';
import PostPage from './pages/PostPage/PostPage';
import CreatePostPage from './pages/CreatePostPage/CreatePostPage';

class App extends Component {
  state = {};

  render() {
    return (
      <>
        <Navigation />
        <Switch>
          <Route path="/" exact component={PostsPage} />
          <Route path="/home" component={HomePage} />
          <Route path="/posts/new" component={CreatePostPage} />
          <Route path="/posts/:id" component={PostPage} />
          <Route path="/about" component={AboutPage} />
          <Redirect to="/home" />
        </Switch>
      </>
    );
  }
}

export default App;
