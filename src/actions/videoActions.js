import api from '../appwrite/appwrite'
import { 
  VIDEO_CREATE_REQUEST,
  VIDEO_CREATE_SUCCESS,
  VIDEO_CREATE_FAIL,
  VIDEO_CREATE_RESET,
  VIDEO_LIST_REQUEST,
  VIDEO_LIST_SUCCESS,
  VIDEO_LIST_FAIL,
  
} from '../constants/reduxConstants'; 

export const createVideo =  (file, title, createdBy) => async (dispatch, getState) => {
  try {
    dispatch({
      type: VIDEO_CREATE_REQUEST,
    });

    const data = await api.createFile(file);
    const dbRecord = await api.createDocument({ "Create_date": data.dateCreated, "Title": title, "VideoName": data.name, "videoID": data.$id, "CreatedBy": createdBy }, ['role:all'], [`${data.$write[0]}`]);
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
export const listVideos = () => async (
  dispatch) => {
  try {
    dispatch({ type: VIDEO_LIST_REQUEST });

    const data = await api.listDocuments();
    console.log("Return videoList fromdatabase******",data.documents.reverse())

    dispatch({
      type: VIDEO_LIST_SUCCESS,
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
      type: VIDEO_LIST_FAIL,
      payload: message,
    });
  }
}

export const viewVideo = async(id) =>{
  return await api.getVideoView(id);
   
}