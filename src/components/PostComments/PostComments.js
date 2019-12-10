import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './PostComments.module.css';

class PostComments extends Component {
  state = { body: '' };

  componentDidMount() {
    const {
      post: { comments },
      getCommentsPost,
    } = this.props;
    getCommentsPost(comments);
  }

  handleSubmit = evt => {
    evt.preventDefault();
    const { postId, addCommentPost } = this.props;
    const { body } = this.state;
    const comment = { postId, body };
    addCommentPost(comment);
    this.setState({ body: '' });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  render() {
    const { onCloseComments, comments } = this.props;
    const { body } = this.state;
    return (
      <>
        {comments && (
          <ul className={css.list}>
            {comments.map(item => (
              <li key={item.id} className={css.item}>
                <p className={css.itemBody}>{item.body}</p>
              </li>
            ))}
          </ul>
        )}
        <form className={css.adForm} onSubmit={this.handleSubmit}>
          <label>to comment</label>
          <textarea
            placeholder="Enter the text of your comment..."
            onChange={this.handleChange}
            required
            minLength="3"
            type="text"
            name="body"
            value={body}
          />
          <button type="submit">add</button>
          <button type="button" onClick={onCloseComments}>
            close
          </button>
        </form>
      </>
    );
  }
}

export default PostComments;

PostComments.propTypes = {
  getCommentsPost: PropTypes.func.isRequired,
  onCloseComments: PropTypes.func.isRequired,
  post: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.object,
    PropTypes.number,
    PropTypes.string,
  ).isRequired,
  postId: PropTypes.number.isRequired,
  addCommentPost: PropTypes.func.isRequired,
};
