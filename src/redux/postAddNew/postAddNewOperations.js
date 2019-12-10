import { toast } from 'react-toastify';
import {
  addPostStart,
  addPostSuccess,
  addPostError,
} from './postAddNewActions';
import { addPostOnServer } from '../../services/api';

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

export const example = () => {};
