export const Type = {
  GET_POST_START: 'GET_POST_START',
  GET_POST_SUCCESS: 'GET_POST_SUCCESS',
  GET_POST_ERROR: 'GET_POST_ERROR',
};

export const fetchPostStart = () => ({
  type: 'GET_POST_START',
});

export const fetchPostSuccess = data => ({
  type: 'GET_POST_SUCCESS',
  payload: data,
});

export const fetchPostError = error => ({
  type: 'GET_POST_ERROR',
  payload: error,
});
