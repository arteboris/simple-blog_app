import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import postIdReducer from './postsId/postIdReducer';
import postNewReducer from './postNew/postNewReducer';
import postsAllReducer from './postsAll/postsAllReducer';
import loaderReducer from './loader/loaderReducser';

const rootReducer = combineReducers({
  postId: postIdReducer,
  postNew: postNewReducer,
  postsAll: postsAllReducer,
  isLoading: loaderReducer,
});

const enhancer = applyMiddleware(ReduxThunk);

const store = createStore(rootReducer, composeWithDevTools(enhancer));

export default store;
