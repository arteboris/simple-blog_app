import { connect } from 'react-redux';
import PostChange from './PostChange';
import post from '../../redux/post/postSelectors';
import { changePostId } from '../../redux/post/postOperations';

const mapStateToProps = state => ({
  post: post(state),
});

const mapDispatchToProps = {
  changePostId,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostChange);
