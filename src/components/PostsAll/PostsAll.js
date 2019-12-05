import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import css from './PostsAll.module.css';

export default class PostsAll extends Component {
  state = {};

  componentDidMount() {
    const { getPostsAll } = this.props;
    getPostsAll();
  }

  render() {
    const { postsAll } = this.props;
    return (
      <>
        <ul className={css.list}>
          {postsAll.map(item => (
            <li key={item.id} className={css.item}>
              <Link to={`/posts/${item.id}`}>
                <h3 className={css.itemTitle}>{item.title}</h3>
                <p className={css.itemBody}>{item.body}</p>
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

PostsAll.propTypes = {
  getPostsAll: PropTypes.func.isRequired,
  postsAll: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
};
