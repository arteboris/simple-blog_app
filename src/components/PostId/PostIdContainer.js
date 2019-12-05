import { connect } from 'react-redux';
import PostId from './PostId';
import postId from '../../redux/postsId/postIdSelectors';
import { deletePostId } from '../../redux/postNew/postNewOperations';

const mapStateToProps = state => ({
  postId: postId(state),
});

const mapDispatchToProps = {
  onRemove: id => deletePostId(id),
};

export default connect(mapStateToProps, mapDispatchToProps)(PostId);
