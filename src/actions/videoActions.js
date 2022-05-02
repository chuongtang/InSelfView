import api from '../appwrite/appwrite'
import { 
  VIDEO_CREATE_REQUEST,
  VIDEO_CREATE_SUCCESS,
  VIDEO_CREATE_FAIL,
  VIDEO_CREATE_RESET
} from '../constants/reduxConstants'; 

export const createVideo =  (file) => async (dispatch, getState) => {
  try {
    dispatch({
      type: VIDEO_CREATE_REQUEST,
    });

    // const {
    //   userLogin: { userInfo },
    // } = getState();

    // const { data } = await api.createFile(file);
    const  data = await api.createFile(file);
    // resolve(data);

    dispatch({
      type: VIDEO_CREATE_SUCCESS,
      payload: data,
    });

    console.log("payload when dispatch video_create_success***",data)
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: VIDEO_CREATE_FAIL,
      payload: message,
    });
  }
}