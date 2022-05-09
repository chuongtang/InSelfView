import {
  VIDEO_LIST_REQUEST,
  VIDEO_LIST_SUCCESS,
  VIDEO_LIST_FAIL,

  VIDEO_DETAILS_REQUEST,
  VIDEO_DETAILS_SUCCESS,
  VIDEO_DETAILS_FAIL,

  VIDEO_DELETE_REQUEST,
  VIDEO_DELETE_SUCCESS,
  VIDEO_DELETE_FAIL,

  VIDEO_CREATE_RESET,
  VIDEO_CREATE_FAIL,
  VIDEO_CREATE_SUCCESS,
  VIDEO_CREATE_REQUEST,


} from '../constants/reduxConstants';

export const videoCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case VIDEO_CREATE_REQUEST:
      return { loading: true };
    case VIDEO_CREATE_SUCCESS:
      return { loading: false, success: true, video: action.payload };
    case VIDEO_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case VIDEO_CREATE_RESET:
      return {};
    default:
      return state;
  }
}

export const myVideosListReducer = (state = { videos: [] }, action) => {
  switch (action.type) {
    case VIDEO_LIST_REQUEST:
      return { loading: true, videos: [] };
    case VIDEO_LIST_SUCCESS:
      return {
        loading: false,
        videos: action.payload,
      };
    case VIDEO_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}


export const videoDetailsReducer = (
  state = { video: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case VIDEO_DETAILS_REQUEST:
      return { loading: true, ...state };
    case VIDEO_DETAILS_SUCCESS:
      return { loading: false, video: action.payload };
    case VIDEO_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
