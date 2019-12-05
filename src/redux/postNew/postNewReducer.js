import { Type } from './postNewActions';

const postNewReducer = (state = [], { type, payload }) => {
  switch (type) {
    case Type.ADD_POST_SUCCESS:
      return [payload, ...state];
    case Type.DELETE_POST_SUCCESS:
      return state.filter(post => post.id !== payload);
    default:
      return state;
  }
};

export default postNewReducer;
