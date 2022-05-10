import api from '../appwrite/appwrite'
import { 
  COMMENT_CREATE_REQUEST,
  COMMENT_CREATE_SUCCESS,
  COMMENT_CREATE_FAIL,
 
  COMMENT_LIST_REQUEST,
  COMMENT_LIST_SUCCESS,
  COMMENT_LIST_FAIL,
  
} from '../constants/reduxConstants'; 


// 
export const createComment =  (documentId, data) => async (dispatch, getState) => {
  try {
    dispatch({
      type: COMMENT_CREATE_REQUEST,
    });

    const returnedData = await api.database.updateComment(documentId, data);
    dispatch({
      type: COMMENT_CREATE_SUCCESS,
      payload: returnedData,
    });

    console.log("payload when dispatch COMMENT_create_success***",data)
  } catch (error) {
    const message =
      error.response && error.response.message
        ? error.response.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: COMMENT_CREATE_FAIL,
      payload: message,
    });
  }
}