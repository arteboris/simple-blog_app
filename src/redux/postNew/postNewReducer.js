import { Type } from './postNewActions';

const postNewReducer = (state = [], { type, payload }) => {
  switch (type) {
    case Type.ADD_POST_SUCCESS:
      return [payload.post, ...state];
    default:
      return state;
  }
};

export default postNewReducer;
