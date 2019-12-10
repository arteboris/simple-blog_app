import { Type } from './commentsActions';

const commentsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case Type.GET_COMMENTS_POST:
      return payload;
    case Type.ADD_COMMENT_SUCCESS:
      return [...state, payload];
    default:
      return state;
  }
};

export default commentsReducer;
