import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import postIdReducer from './postsId/postIdReducer';
import postNewReducer from './postNew/postNewReducer';
import postsAllReducer from './postsAll/postsAllReducer';

export const rootReducer = combineReducers({
  postId: postIdReducer,
  postNew: postNewReducer,
  postsAll: postsAllReducer,
});

export const store = createStore(rootReducer, devToolsEnhancer());
