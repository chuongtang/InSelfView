import {
  COMMENT_LIST_REQUEST,
  COMMENT_LIST_SUCCESS,
  COMMENT_LIST_FAIL,

  COMMENT_DETAILS_REQUEST,
  COMMENT_DETAILS_SUCCESS,
  COMMENT_DETAILS_FAIL,

  COMMENT_DELETE_REQUEST,
  COMMENT_DELETE_SUCCESS,
  COMMENT_DELETE_FAIL,

  COMMENT_CREATE_RESET,
  COMMENT_CREATE_FAIL,
  COMMENT_CREATE_SUCCESS,
  COMMENT_CREATE_REQUEST,
 
  COMMENT_CREATE_REVIEW_REQUEST,
  COMMENT_CREATE_REVIEW_SUCCESS,
  COMMENT_CREATE_REVIEW_FAIL,
  COMMENT_CREATE_REVIEW_RESET,


} from '../constants/reduxConstants';

export const commentCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case COMMENT_CREATE_REQUEST:
      return { loading: true };
    case COMMENT_CREATE_SUCCESS:
      return { loading: false, success: true, comment: action.payload };
    case COMMENT_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case COMMENT_CREATE_RESET:
      return {};
    default:
      return state;
  }
}

export const myCommentsListReducer = (state = { comments: [] }, action) => {
  switch (action.type) {
    case COMMENT_LIST_REQUEST:
      return { loading: true, comments: [] };
    case COMMENT_LIST_SUCCESS:
      return {
        loading: false,
        comments: action.payload,
      };
    case COMMENT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
