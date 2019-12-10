import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import postReducer from './post/postReducer';
import postsAllReducer from './postsAllList/postsAllReducer';
import loaderReducer from './loader/loaderReducser';
import commentsReducer from './comments/commentsReducer';

const rootReducer = combineReducers({
  post: postReducer,
  comments: commentsReducer,
  postsAll: postsAllReducer,
  isLoading: loaderReducer,
});

const enhancer = applyMiddleware(ReduxThunk);

const store = createStore(rootReducer, composeWithDevTools(enhancer));

export default store;
