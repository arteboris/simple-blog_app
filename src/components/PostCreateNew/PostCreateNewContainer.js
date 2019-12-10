import { connect } from 'react-redux';
import PostCreateNew from './PostCreateNew';
import { addPost } from '../../redux/postAddNew/postAddNewOperations';

const mapDispatchToProps = {
  addPost,
};

export default connect(null, mapDispatchToProps)(PostCreateNew);
