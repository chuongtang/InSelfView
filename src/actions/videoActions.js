import api from '../appwrite/appwrite'
import { 
  VIDEO_CREATE_REQUEST,
  VIDEO_CREATE_SUCCESS,
  VIDEO_CREATE_FAIL,
  VIDEO_CREATE_RESET
} from '../constants/reduxConstants'; 

export const createVideo = (file) => async (dispatch, getState) => {
  try {
    dispatch({
      type: VIDEO_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${userInfo.token}`,
    //   },
    // };

    const { data } = await api.createFile(file);
    console.log("HERE is frm videoAction****",data)

    dispatch({
      type: VIDEO_CREATE_SUCCESS,
      payload: data,
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
      type: VIDEO_CREATE_FAIL,
      payload: message,
    });
  }
}