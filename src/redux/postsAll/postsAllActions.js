export const Type = {
  FETCH_POSTS_ALL_START: 'FETCH_POSTS_ALL_START',
  FETCH_POSTS_ALL_SUCCESS: 'FETCH_POSTS_ALL_SUCCESS',
  FETCH_POSTS_ALL_ERROR: 'FETCH_POSTS_ALL_ERROR',
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
