import { connect } from 'react-redux';
import PostNew from './PostNew';
import { addPost } from '../../redux/postNew/postNewOperations';

const mapDispatchToProps = {
  addPost,
};

export default connect(null, mapDispatchToProps)(PostNew);
