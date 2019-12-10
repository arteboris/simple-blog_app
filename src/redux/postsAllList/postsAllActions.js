export const Type = {
  FETCH_POSTS_ALL_START: 'FETCH_POSTS_ALL_START',
  FETCH_POSTS_ALL_SUCCESS: 'FETCH_POSTS_ALL_SUCCESS',
  FETCH_POSTS_ALL_ERROR: 'FETCH_POSTS_ALL_ERROR',
  DELETE_POST_START: 'DELETE_POST_START',
  DELETE_POST_SUCCESS: 'DELETE_POST_SUCCESS',
  DELETE_POST_ERROR: 'DELETE_POST_ERROR',
};

export const fetchPostsAllStart = () => ({
  type: 'FETCH_POSTS_ALL_START',
});

export const fetchPostsAllSuccess = data => ({
  type: 'FETCH_POSTS_ALL_SUCCESS',
  payload: data,
});

export const fetchPostsAllError = error => ({
  type: 'FETCH_POSTS_ALL_ERROR',
  payload: error,
});

export const deletePostStart = () => ({
  type: Type.DELETE_POST_START,
});

export const deletePostSuccess = id => ({
  type: Type.DELETE_POST_SUCCESS,
  payload: id,
});

export const deletePostError = error => ({
  type: Type.DELETE_POST_ERROR,
  payload: error,
});
