import { Type } from './postIdActions';

const postIdReducer = (state = [], { type, payload }) => {
  switch (type) {
    case Type.GET_POST_SUCCESS:
      return payload;
    default:
      return state;
  }
};

export default postIdReducer;
