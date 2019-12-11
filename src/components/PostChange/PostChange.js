import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './PostChange.module.css';

class PostChange extends Component {
  state = { title: '', body: '' };

  componentDidMount() {
    const {
      post: { title, body },
    } = this.props;
    this.setState({
      title,
      body,
    });
  }

  handleSubmit = evt => {
    evt.preventDefault();
    const { title, body } = this.state;
    const {
      post: { id },
      changePostId,
      onClose,
    } = this.props;
    const post = { title, body };
    changePostId(id, post);
    onClose();
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  render() {
    const { onClose } = this.props;
    const { title, body } = this.state;

    return (
      <>
        <form className={css.adForm} onSubmit={this.handleSubmit}>
          <label>Title</label>
          <input
            placeholder="..."
            onChange={this.handleChange}
            minLength="3"
            required
            type="text"
            name="title"
            value={title}
          />
          <label>Description</label>
          <textarea
            placeholder="..."
            onChange={this.handleChange}
            required
            minLength="3"
            type="text"
            name="body"
            value={body}
          />
          <button type="submit">Save Post</button>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </form>
      </>
    );
  }
}

export default PostChange;

PostChange.propTypes = {
  onClose: PropTypes.func.isRequired,
  post: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  changePostId: PropTypes.func.isRequired,
};
