import { connect } from 'react-redux';
import Post from './Post';
import post from '../../redux/post/postSelectors';
import { deletePostId } from '../../redux/postsAllList/postsAllOperations';

const mapStateToProps = state => ({
  post: post(state),
});

const mapDispatchToProps = {
  onRemove: id => deletePostId(id),
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
