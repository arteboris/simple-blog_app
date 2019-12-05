import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getPostId from '../../../redux/postsId/postIdOperations';
import PostId from '../../PostId/PostIdContainer';

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
    // eslint-disable-next-line react/destructuring-assignment
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
        <PostId onReturn={this.handleOnReturn} />
      </>
    );
  }
}

const mapDispatchToProps = {
  getPostId,
};

export default connect(null, mapDispatchToProps)(PostPage);
