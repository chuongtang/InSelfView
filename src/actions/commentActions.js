import api from '../appwrite/appwrite'
import { 
  COMMENT_CREATE_REQUEST,
  COMMENT_CREATE_SUCCESS,
  COMMENT_CREATE_FAIL,
 
  COMMENT_LIST_REQUEST,
  COMMENT_LIST_SUCCESS,
  COMMENT_LIST_FAIL,
  
} from '../constants/reduxConstants'; 


export const listComments = () => async (
  dispatch) => {
  try {
    dispatch({ type: COMMENT_LIST_REQUEST });

    const data = await api
    
    dispatch({
      type:  COMMENT_LIST_SUCCESS,
      payload: data.documents,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type:  COMMENT_LIST_FAIL,
      payload: message,
    });
  }
}
