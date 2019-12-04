import { Type } from './postsAllActions';

const postsAllReducer = (state = [], { type, payload }) => {
  switch (type) {
    case Type.GET_POSTS_ALL_SUCCESS:
      return payload;
    default:
      return state;
  }
};

export default postsAllReducer;
