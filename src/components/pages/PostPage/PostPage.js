/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPostId } from '../../../redux/post/postOperations';
import Post from '../../Post/PostContainer';

class PostPage extends Component {
  state = {};

  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func,
    }).isRequired,
    getPostId: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const id = this.getIdFromProps(this.props);
    this.props.getPostId(id);
  }

  getIdFromProps = props => props.match.params.id;

  handleOnReturn = () => {
    const { history } = this.props;
    history.push('/');
  };

  render() {
    return (
      <>
        <Post onReturn={this.handleOnReturn} />
      </>
    );
  }
}

const mapDispatchToProps = {
  getPostId,
};

export default connect(null, mapDispatchToProps)(PostPage);
