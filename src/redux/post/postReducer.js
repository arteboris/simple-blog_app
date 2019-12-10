/* eslint-disable no-param-reassign */
import { Type } from './postActions';
import * as AllPostsType from '../postsAllList/postsAllActions';
import * as CommentsType from '../comments/commentsActions';

const postIdReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case Type.GET_POST_SUCCESS:
      return payload;
    case Type.CHANGE_POST_SUCCESS:
      return { ...state, payload };
    case AllPostsType.Type.DELETE_POST_SUCCESS:
      return {};
    case CommentsType.Type.ADD_COMMENT_SUCCESS:
      state.comments = [...state.comments, payload];
      return state;
    default:
      return state;
  }
};

export default postIdReducer;
