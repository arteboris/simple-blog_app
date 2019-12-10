import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import * as loaderSelectors from '../redux/loader/loaderSelectors';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Navigation from './pages/Navigation/Navigation';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import PostsAllPage from './pages/PostsAllPage/PostsAllPage';
import PostPage from './pages/PostPage/PostPage';
import CreatePostPage from './pages/CreatePostPage/CreatePostPage';

class App extends Component {
  state = {};

  render() {
    const { isLoading } = this.props;
    const loaderStyles = {
      position: 'fixed',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100%',
      backgroundColor: '#fff',
      zIndex: '10',
    };
    return (
      <>
        {isLoading && (
          <Loader
            type="ThreeDots"
            color="#F39A3E"
            height={80}
            width={80}
            style={loaderStyles}
            timeout={0}
          />
        )}
        <Navigation />
        <Switch>
          <Route path="/" exact component={PostsAllPage} />
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

const mapStateToProps = state => ({
  isLoading: loaderSelectors.getIsLoading(state),
});

App.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(App);
