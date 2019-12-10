import { toast } from 'react-toastify';
import {
  fetchPostStart,
  fetchPostSuccess,
  fetchPostError,
  changePostStart,
  changePostSuccess,
  changePostError,
} from './postActions';
import { getPostIdsonServer, changePostIdonServer } from '../../services/api';

toast.configure({
  autoClose: 5000,
  draggable: false,
});

export const getPostId = id => dispatch => {
  dispatch(fetchPostStart());
  getPostIdsonServer(id)
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

export const changePostId = (id, post) => dispatch => {
  dispatch(changePostStart());
  changePostIdonServer(id, post)
    .then(response => {
      dispatch(changePostSuccess(response.data));
    })
    .catch(error => {
      toast.error(
        'Сталася помилка. Сервіс тимчасово недоступний. Спробуйте, будь-ласка, пізніше',
        {
          position: toast.POSITION.TOP_CENTER,
          className: 'foo-bar',
        },
      );
      return dispatch(changePostError(error));
    });
};
