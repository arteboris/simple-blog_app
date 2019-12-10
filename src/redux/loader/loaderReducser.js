import { Type } from './loaderActions';
import * as NewPostType from '../postAddNew/postAddNewActions';
import * as AllPostsType from '../postsAllList/postsAllActions';
import * as IdPostType from '../post/postActions';
import * as CommentsType from '../comments/commentsActions';

const loaderReducer = (state = false, { type }) => {
  switch (type) {
    case Type.LOADER_ON: // Включить спиннер
    case NewPostType.Type.ADD_POST_START:
    case NewPostType.Type.DELETE_POST_START:
    case AllPostsType.Type.FETCH_POSTS_ALL_START:
    case IdPostType.Type.GET_POST_START:
    case IdPostType.Type.CHANGE_POST_START:
    case CommentsType.Type.ADD_COMMENT_START:
      return true;
    case Type.LOADER_OFF: // Выключить спиннер
    case NewPostType.Type.ADD_POST_SUCCESS:
    case NewPostType.Type.ADD_POST_ERROR:
    case NewPostType.Type.DELETE_POST_SUCCESS:
    case NewPostType.Type.DELETE_POST_ERROR:
    case AllPostsType.Type.FETCH_POSTS_ALL_SUCCESS:
    case AllPostsType.Type.FETCH_POSTS_ALL_ERROR:
    case IdPostType.Type.GET_POST_SUCCESS:
    case IdPostType.Type.GET_POST_ERROR:
    case IdPostType.Type.CHANGE_POST_SUCCESS:
    case IdPostType.Type.CHANGE_POST_ERROR:
    case CommentsType.Type.ADD_COMMENT_SUCCESS:
    case CommentsType.Type.ADD_COMMENT_ERROR:
      return false;
    default:
      return state;
  }
};

export default loaderReducer;
