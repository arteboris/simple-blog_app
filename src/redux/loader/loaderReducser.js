import { Type } from './loaderActions';
import * as NewPostType from '../postNew/postNewActions';
import * as AllPostsType from '../postsAll/postsAllActions';
import * as IdPostType from '../postsId/postIdActions';

const loaderReducer = (state = false, { type }) => {
  switch (type) {
    case Type.LOADER_ON: // Включить спиннер
    case NewPostType.Type.ADD_POST_START:
    case NewPostType.Type.DELETE_POST_START:
    case AllPostsType.Type.FETCH_POSTS_ALL_START:
    case IdPostType.Type.GET_POST_START:
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
      return false;
    default:
      return state;
  }
};

export default loaderReducer;
