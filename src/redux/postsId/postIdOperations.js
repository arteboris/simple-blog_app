import { toast } from 'react-toastify';
import {
  fetchPostStart,
  fetchPostSuccess,
  fetchPostError,
} from './postIdActions';
import { getPostIdsonServer } from '../../services/api';

toast.configure({
  autoClose: 5000,
  draggable: false,
});

const getPostId = postId => dispatch => {
  dispatch(fetchPostStart());
  getPostIdsonServer(postId)
    .then(response => {
      dispatch(fetchPostSuccess(response.data));
    })
    .catch(error => {
      toast.error(
        'Сталася помилка. Сервіс тимчасово недоступний. Спробуйте, будь-ласка, пізніше',
        {
          position: toast.POSITION.TOP_CENTER,
          className: 'foo-bar',
        },
      );
      return dispatch(fetchPostError(error));
    });
};

export default getPostId;
