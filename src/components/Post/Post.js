/* eslint-disable react/prop-types */
import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import PostChange from '../PostChange/PostChangeContainer';
import PostComments from '../PostComments/PostCommentsContainer';
import { ReactComponent as PenLogo } from '../../assets/icons/pen/create-24px.svg';
import css from './Post.module.css';

class Post extends Component {
  state = { isPostChange: false, isComments: false };

  appRef = createRef();

  componentDidUpdate() {
    const { post, onReturn } = this.props;
    if (post.length === 0) {
      onReturn();
    }
  }

  // scrollToMyRef = () => {
  //   const { scrollHeight } = this.appRef.current;
  //   window.scrollTo({
  //     top: scrollHeight,
  //     behavior: 'smooth',
  //   });
  // };

  openPostChange = () => this.setState({ isPostChange: true });

  closePostChange = () => this.setState({ isPostChange: false });

  openComments = () => this.setState({ isComments: true });

  closeComments = () => this.setState({ isComments: false });

  render() {
    const { isPostChange, isComments } = this.state;
    const {
      post: { title, body, id, comments },
      onReturn,
      onRemove,
    } = this.props;
    return (
      <>
        {!isPostChange && (
          <div className={css.container}>
            <button type="button" onClick={onReturn} className={css.btnReturn}>
              Return
            </button>
            <button
              type="button"
              onClick={this.openPostChange}
              className={css.wrapPenLogo}
            >
              <PenLogo className={css.penLogo} />
            </button>
            <h2 className={css.title}>{title}</h2>
            <p className={css.text}>{body}</p>
            <button
              type="button"
              className={css.btnComments}
              onClick={this.openComments}
            >
              comments
            </button>
            <button
              className={css.btnDel}
              type="button"
              onClick={() => onRemove(id)}
            >
              Delete
            </button>
          </div>
        )}
        {isPostChange && <PostChange onClose={this.closePostChange} />}
        {isComments && (
          <PostComments
            onCloseComments={this.closeComments}
            comments={comments}
            postId={id}
          />
        )}
      </>
    );
  }
}

Post.propTypes = {
  onReturn: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default Post;
