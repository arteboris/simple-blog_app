import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './PostNew.module.css';

class PostNew extends Component {
  state = { title: '', body: '' };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.addPost(this.state);
    this.setState({
      title: '',
      body: '',
    });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  render() {
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
          <button type="submit">Create post</button>
        </form>
      </>
    );
  }
}

export default PostNew;

PostNew.propTypes = {
  addPost: PropTypes.func.isRequired,
};
