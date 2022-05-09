import {
  COMMENT_LIST_REQUEST,
  COMMENT_LIST_SUCCESS,
  COMMENT_LIST_FAIL,
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

export const commentsListReducer = (state = { comments: [] }, action) => {
  switch (action.type) {
    case COMMENT_LIST_REQUEST:
      return { loadingList: true, comments: [] };
    case COMMENT_LIST_SUCCESS:
      return {
        loadingList: false,
        comments: action.payload,
      };
    case COMMENT_LIST_FAIL:
      return { loadingList: false, errorList: action.payload };
    default:
      return state;
  }
}
