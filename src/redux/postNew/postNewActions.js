export const Type = {
  ADD_POST_START: 'ADD_POST_START',
  ADD_POST_SUCCESS: 'ADD_POST_SUCCESS',
  ADD_POST_ERROR: 'ADD_POST_ERROR',
  DELETE_POST_START: 'DELETE_POST_START',
  DELETE_POST_SUCCESS: 'DELETE_POST_SUCCESS',
  DELETE_POST_ERROR: 'DELETE_POST_ERROR',
};

export const addPostStart = () => ({
  type: Type.ADD_POST_START,
});

export const addPostSuccess = post => ({
  type: Type.ADD_POST_SUCCESS,
  payload: post,
});

export const addPostError = error => ({
  type: Type.ADD_POST_ERROR,
  payload: {
    error,
  },
});

export const deletePostStart = () => ({
  type: Type.DELETE_POST_START,
});

export const deletePostSuccess = post => ({
  type: Type.DELETE_POST_SUCCESS,
  payload: post,
});

export const deletePostError = error => ({
  type: Type.DELETE_POST_ERROR,
  payload: {
    error,
  },
});
