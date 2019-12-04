import React, { Component } from 'react';
import PostNew from '../../PostNew/PostNew';
import css from './CreatePostPage.module.css';

export default class CreatePostPage extends Component {
  state = {};

  render() {
    return (
      <div className={css.container}>
        <PostNew />
      </div>
    );
  }
}
