import { 
  COMMENT_CREATE_FAIL,
  COMMENT_CREATE_SUCCESS,
  COMMENT_CREATE_REQUEST,
} from '../constants/reduxConstants';

export const commentCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case COMMENT_CREATE_REQUEST:
      return { loading: true };
    case COMMENT_CREATE_SUCCESS:
      return { loading: false, success: true, comment: action.payload };
    case COMMENT_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

