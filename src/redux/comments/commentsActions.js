export const Type = {
  GET_COMMENTS_POST: 'GET_COMMENTS_POST',
  ADD_COMMENT_START: 'ADD_COMMENT_START',
  ADD_COMMENT_SUCCESS: 'ADD_COMMENT_SUCCESS',
  ADD_COMMENT_ERROR: 'ADD_COMMENT_ERROR',
};

export const getCommentsPost = comments => ({
  type: Type.GET_COMMENTS_POST,
  payload: comments,
});

export const addCommentStart = () => ({
  type: 'ADD_COMMENT_START',
});

export const addCommentSuccess = data => ({
  type: 'ADD_COMMENT_SUCCESS',
  payload: data,
});

export const addCommentError = error => ({
  type: 'ADD_COMMENT_ERROR',
  payload: error,
});
