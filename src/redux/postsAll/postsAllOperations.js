import { toast } from 'react-toastify';
import {
  fetchPostsAllStart,
  fetchPostsAllSuccess,
  fetchPostsAllError,
} from './postsAllActions';
import { getPostsonServer } from '../../services/api';

toast.configure({
  autoClose: 5000,
  draggable: false,
});

const getPostsAll = () => dispatch => {
  dispatch(fetchPostsAllStart());
  getPostsonServer()
    .then(response => {
      dispatch(fetchPostsAllSuccess(response.data));
    })
    .catch(error => {
      toast.error(
        'Сталася помилка. Сервіс тимчасово недоступний. Спробуйте, будь-ласка, пізніше',
        {
          position: toast.POSITION.TOP_CENTER,
          className: 'foo-bar',
        },
      );
      return dispatch(fetchPostsAllError(error));
    });
};

export default getPostsAll;
