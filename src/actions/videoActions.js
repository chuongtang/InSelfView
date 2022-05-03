import api from '../appwrite/appwrite'
import { 
  VIDEO_CREATE_REQUEST,
  VIDEO_CREATE_SUCCESS,
  VIDEO_CREATE_FAIL,
  VIDEO_CREATE_RESET
} from '../constants/reduxConstants'; 

export const createVideo =  (file, title) => async (dispatch, getState) => {
  try {
    dispatch({
      type: VIDEO_CREATE_REQUEST,
    });

    const data = await api.createFile(file);
    const dbRecord = await api.createDocument({ "Create_date": data.dateCreated, "Title": title, "VideoName": data.name, "videoID": data.$id }, [`${data.$read[0]}`], [`${data.$write[0]}`]);
    console.log("Return dbRecord fromdatabase******",dbRecord)

    dispatch({
      type: VIDEO_CREATE_SUCCESS,
      payload: dbRecord,
    });

    console.log("payload when dispatch video_create_success***",data)
  } catch (error) {
    const message =
      error.response && error.response.message
        ? error.response.message
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