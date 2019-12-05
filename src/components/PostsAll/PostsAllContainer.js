import { connect } from 'react-redux';
import PostsAll from './PostsAll';
import getPostsAll from '../../redux/postsAll/postsAllOperations';
import postsAll from '../../redux/postsAll/postsAllSelectors';

const mapStateToProps = state => ({
  postsAll: postsAll(state),
});

const mapDispatchToProps = {
  getPostsAll,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsAll);
