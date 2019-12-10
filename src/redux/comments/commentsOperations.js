import { toast } from 'react-toastify';
import {
  addCommentStart,
  addCommentSuccess,
  addCommentError,
} from './commentsActions';
import { addCommentPostOnServer } from '../../services/api';

toast.configure({
  autoClose: 5000,
  draggable: false,
});

const addCommentPost = comment => dispatch => {
  dispatch(addCommentStart());
  addCommentPostOnServer(comment)
    .then(response => {
      dispatch(addCommentSuccess(response.data));
    })
    .catch(error => {
      toast.error(
        'Сталася помилка. Сервіс тимчасово недоступний. Спробуйте, будь-ласка, пізніше',
        {
          position: toast.POSITION.TOP_CENTER,
          className: 'foo-bar',
        },
      );
      return dispatch(addCommentError(error));
    });
};

export default addCommentPost;
