import { toast } from 'react-toastify';
import {
  addPostStart,
  addPostSuccess,
  addPostError,
  deletePostStart,
  deletePostSuccess,
  deletePostError,
} from './postNewActions';
import { addPostOnServer, deletePostIdsonServer } from '../../services/api';

toast.configure({
  autoClose: 5000,
  draggable: false,
});

export const addPost = post => dispatch => {
  dispatch(addPostStart());
  addPostOnServer(post)
    .then(response => {
      dispatch(addPostSuccess(response.data));
    })
    .catch(error => {
      toast.error(
        'Сталася помилка. Сервіс тимчасово недоступний. Спробуйте, будь-ласка, пізніше',
        {
          position: toast.POSITION.TOP_CENTER,
          className: 'foo-bar',
        },
      );
      return dispatch(addPostError(error));
    });
};

export const deletePostId = postId => dispatch => {
  dispatch(deletePostStart());
  deletePostIdsonServer(postId)
    .then(response => {
      dispatch(deletePostSuccess(response.data));
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
