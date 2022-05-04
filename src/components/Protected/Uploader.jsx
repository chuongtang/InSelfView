import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { AlertWarning, AlertError, AlertSuccess } from '../Alerts';
import { createVideo } from '../../actions/videoActions'
import Loader from '../Loader'

const Uploader = () => {

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [message, setMessage] = useState(null);
  const [showUpload, setShowUpload] = useState(false);
  const [successUpl, setSuccessUpl] = useState(false);
  const [title, setTitle] = useState("");
  const [createdBy, setCreatedBy] = useState("");

  const videoCreate = useSelector((state) => state.videoCreate)
  const { loading, video, success, error } = videoCreate

  useEffect(() => {

    userInfo? setCreatedBy(userInfo.name) : setShowUpload(false)
    if (success) {
      setShowUpload(false)
      console.log("=>Successfully uploaded video and recorded in DB")
      setSuccessUpl(success)
      setTimeout(() => {
        setSuccessUpl(!success);
      }, 3000);
    }
  }, [success]);

  const onSubmit = (e) => {
    if (e) {
      e.preventDefault();
    }
    console.log("Uplaoder clicked")
    // let formData = new FormData();

    let submitFile = document.querySelector("#customFile");

    if (typeof submitFile.files[0] === 'undefined' || title == "") {
      setMessage("All fields required");
      return setTimeout(() => {
        setMessage("");
      }, 3000);
    }
    const fileToUpl = submitFile.files[0]
    console.log("submit file :", fileToUpl);

    // formData.append("file", submitFile.files[0]);
    const fileSize = submitFile.files[0].size;
    console.log("file size for uploading ", fileSize);

    if (fileSize > 30000000) {
      setMessage("File exceeded size limit of 30MB");
      return setTimeout(() => {
        setMessage("");
      }, 4000);
    } else {

    }
    try {
      dispatch(createVideo(fileToUpl, title, createdBy));
      console.log("createdVideo dispatched")
    } catch (error) {
      setMessage(error.message);
    }
  }
  return (
    <div>
      <div className="flex items-center my-6">
        <div className="border-t border-gray-300 flex-grow mr-3" aria-hidden="true"></div>
        <div className="text-gray-600 italic">Or</div>
        <div className="border-t border-gray-300 flex-grow ml-3" aria-hidden="true"></div>
      </div>
      <aside className="p-12 bg-gray-100 sm:p-16 lg:p-24">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-md font-medium text-gray-500">
            Ready to get some constructive feedback ?
          </p>

          <p className="mt-2 text-xl font-bold sm:text-3xl">
            Upload and share your recoding for comments
          </p>

          <div className="mt-8 sm:items-center sm:justify-center sm:flex">
            {!successUpl ? <button className="flex px-5 py-3 font-medium text-white bg-yellow-500 rounded-lg shadow-xl hover:bg-blue-500" onClick={() => setShowUpload(true)}>
              Continue
            </button> : <AlertSuccess message={"Video Upload Success"} />}


          </div>
        </div>
      </aside>
      {/* Modal for uploader */}
      {showUpload &&
        (<div className="modal fade fixed top-0 left-0 w-full h-full outline-none  overflow-y-auto bg-gray-500 bg-opacity-40 z-60 ">
          <div className="mx-auto mt-18 border-none shadow-lg relative flex flex-col w-3/5 pointer-events-auto bg-gradient-to-t from-gray-300 to-gray-100 rounded-2xl outline-none text-current py-8">
            {message && <AlertWarning message={message} />}
            {error && <AlertError message={error} />}

            <form onSubmit={onSubmit}>
              {/* <form onSubmit={onSubmit}> */}
              <div className="modal-body relative p-2">
                <div className="space-y-2 ">
                  <label htmlFor="title" className="text-green-500 font-bold p-2">Title or question related to this Video</label>
                  <input type="text" name="title" id="title"
                    className="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300 focus:ring-2 focus:ring-sky-300 focus:outline-none"
                    value={title}
                    required={true}
                    onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="file" className="text-sm text-white truncate border border-green-500 rounded-lg font-semibold bg-gradient-to-r from-gray-400 to-gray-100 cursor-pointer p-3 mt-8 hover:bg-rose-500">
                    <input type="file" name="file"
                      id="customFile"
                      required={true}
                      accept="video/*"
                    />
                  </label>
                </div>
              </div>
              {!loading ?
                <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-center p-4 border-t border-gray-200 rounded-b-md">
                  <button className="flex bg-transparent border border-red-400 text-sm md:text-lg text-red-400 hover:bg-red-400 hover:text-white text-center p-2 my-4 rounded-lg mr-4" onClick={() => setShowUpload(false)}>
                    <svg width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-2">
                      <path d="M7 10.625H14.2C14.2 10.625 14.2 10.625 14.2 10.625C14.2 10.625 17 10.625 17 13.625C17 17 14.2 17 14.2 17H13.4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M10.5 14L7 10.625L10.5 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Cancel
                  </button>
                  <button
                    className="flex bg-transparent border border-green-500 text-sm md:text-lg text-green-500 hover:bg-green-500 hover:text-white text-center p-2 my-4 rounded-lg"
                    type="submit"
                  >
                    <svg width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-2">
                      <path d="M12 22V13M12 13L15.5 16.5M12 13L8.5 16.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M20 17.6073C21.4937 17.0221 23 15.6889 23 13C23 9 19.6667 8 18 8C18 6 18 2 12 2C6 2 6 6 6 8C4.33333 8 1 9 1 13C1 15.6889 2.50628 17.0221 4 17.6073" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Upload
                  </button>
                </div> : <Loader />}
            </form>
          </div>
        </div>)
      }
    </div>
  )
}

export default Uploader