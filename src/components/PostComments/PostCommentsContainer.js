import { connect } from 'react-redux';
import PostComments from './PostComments';
import post from '../../redux/post/postSelectors';
import addCommentPost from '../../redux/comments/commentsOperations';
import { getCommentsPost } from '../../redux/comments/commentsActions';
import comments from '../../redux/comments/commentsSelectors';

const mapStateToProps = state => ({
  post: post(state),
  comments: comments(state),
});

const mapDispatchToProps = {
  addCommentPost,
  getCommentsPost,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostComments);
