import React, { Component } from 'react';
import PostCreateNew from '../../PostCreateNew/PostCreateNewContainer';
import css from './CreatePostPage.module.css';

export default class CreatePostPage extends Component {
  state = {};

  render() {
    return (
      <div className={css.container}>
        <PostCreateNew />
      </div>
    );
  }
}
