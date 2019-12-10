import { toast } from 'react-toastify';
import {
  fetchPostsAllStart,
  fetchPostsAllSuccess,
  fetchPostsAllError,
  deletePostStart,
  deletePostSuccess,
  deletePostError,
} from './postsAllActions';
import { getPostsonServer, deletePostIdsonServer } from '../../services/api';

toast.configure({
  autoClose: 5000,
  draggable: false,
});

export const getPostsAll = () => dispatch => {
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

export const deletePostId = id => dispatch => {
  dispatch(deletePostStart());
  deletePostIdsonServer(id)
    .then(() => {
      dispatch(deletePostSuccess(id));
    })
    .catch(error => {
      toast.error(
        'Сталася помилка. Сервіс тимчасово недоступний. Спробуйте, будь-ласка, пізніше',
        {
          position: toast.POSITION.TOP_CENTER,
          className: 'foo-bar',
        },
      );
      return dispatch(deletePostError(error));
    });
};
