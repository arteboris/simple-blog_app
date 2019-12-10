import { connect } from 'react-redux';
import PostsAll from './PostsAll';
import {
  getPostsAll,
  deletePostId,
} from '../../redux/postsAllList/postsAllOperations';
import postsAll from '../../redux/postsAllList/postsAllSelectors';

const mapStateToProps = state => ({
  postsAll: postsAll(state),
});

const mapDispatchToProps = {
  getPostsAll,
  onDeletePost: id => deletePostId(id),
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsAll);
