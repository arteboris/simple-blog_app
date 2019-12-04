export const Type = {
  GET_POSTS_ALL_START: 'GET_POSTS_ALL_START',
  GET_POSTS_ALL_SUCCESS: 'GET_POSTS_ALL_SUCCESS',
  GET_POSTS_ALL_ERROR: 'GET_POSTS_ALL_ERROR',
};

export const fetchPostsAllStart = () => ({
  type: 'GET_POSTS_ALL_START',
});

export const fetchPostsAllSuccess = data => ({
  type: 'GET_POSTS_ALL_SUCCESS',
  payload: data,
});

export const fetchPostsAllError = error => ({
  type: 'GET_POSTS_ALL_ERROR',
  payload: error,
});
