import { Type } from './postsAllActions';
import * as NewPostType from '../postAddNew/postAddNewActions';
import * as PostActionsType from '../post/postActions';

const postsAllReducer = (state = [], { type, payload }) => {
  switch (type) {
    case NewPostType.Type.ADD_POST_SUCCESS:
      return [payload, ...state];
    case Type.FETCH_POSTS_ALL_SUCCESS:
      return payload;
    case Type.DELETE_POST_SUCCESS:
      return state.filter(post => post.id !== payload);
    case PostActionsType.Type.CHANGE_POST_SUCCESS:
      return state.map(post =>
        post.id === payload.id ? { ...payload } : post,
      );
    default:
      return state;
  }
};

export default postsAllReducer;
