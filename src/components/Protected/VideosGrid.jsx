import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AlertInfo, AlertWarning, AlertSuccess, AlertError } from '../Alerts'
import Loader from '../Loader'
import { listVideos } from '../../actions/videoActions';
import VideoPreviewer from '../Protected/VideoPreviewer'

import dotenv from 'dotenv';
const urlStart = import.meta.env.VITE_APPWRITE_VIEWLINK_P1
const urlEnd = import.meta.env.VITE_APPWRITE_VIEWLINK_P2


const VideosGrid = ({ prop }) => {

  const [showGrid, setShowGrid] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [playVideoID, setPlayVideoID] = useState("");
  const [videoToPreview, setVideoToPreview] = useState({});
  const [showPreview, setShowPreview] = useState(false);
  const dispatch = useDispatch();

  const videoList = useSelector((state) => state.videosList);
  const { loading, error, videos } = videoList;

  const videoCreate = useSelector((state) => state.videoCreate)
  const { success } = videoCreate

  useEffect(() => {
    dispatch(listVideos());
  }, [success]);


  return (
    <section id="gridTop">
      <div className="max-w-screen-xl px-4 py-8 mx-auto">
        <div className="relative max-w-3xl mx-auto text-center">
          <span className="absolute inset-x-0 h-px -translate-y-1/2 bg-black/10 top-1/2"></span>

          <h2 className="relative inline-block px-4 text-2xl font-bold text-center bg-white" >
            View other's recording
          </h2>
          <a href="#midGrid" className="mt-12 sm:items-center sm:justify-center sm:flex ">
            <button className="flex mx-auto px-5 py-3 font-medium text-white bg-blue-500 rounded-lg shadow-xl hover:bg-yellow-500"
              onClick={() => {
                setShowGrid(!showGrid)
                setScrolled(!scrolled)
              }}>
              Toggle videos list
            </button>
          </a>
        </div>
        {error && <AlertError message={error} />}
        {loading && <Loader />}

        {showGrid &&
          <div className="grid grid-cols-2 mt-8 lg:grid-cols-4 gap-x-4 gap-y-8"  >
            {videos?.map((video) => (

              <div key={video.$id} className="relative block border border-gray-100 rounded-lg" >
                <video className="max-h-30 w-auto mx-auto rounded-lg mt-4"
                  title={video.Title}
                  loading="lazy"
                  src={`https://${urlStart}${video.videoID}${urlEnd}`}
                >

                </video>
                <div className="p-6">
                  <h5 className="mt-1 text-lg font-bold truncate">
                    {video.Title}
                  </h5>
                  <h5 className="mt-1 text-lg truncate">
                    Posted by: {video.CreatedBy}
                  </h5>
                  <button
                    type="button"
                    className="flex items-center justify-center w-full px-8 py-4 mt-4 bg-yellow-500 rounded-lg shadow-lg"
                    onClick={() => {
                      setPlayVideoID(video.$id);
                      setShowPreview(true)
                      setVideoToPreview(video)
                    }}
                  >
                    <span className="text-sm font-medium">
                      Preview
                    </span>
                  </button>

                </div>
              </div>
            ))}
          </div>}

        {/* Modal for ⬇ video preview when button is clicked */}
        {showPreview && <VideoPreviewer video={videoToPreview} />
        }
        {/* Scroll ⬇ Top btn */}
        {scrolled && !showPreview &&
          <a href="#gridTop">
            <button type="button" className="block fixed right-14 bottom-8 z-99 bg-rose-500 p-2 text-xs text-white rounded-lg shadow-lg font-bold animate-bounce"
            >Top ⇑</button></a>}
        {showPreview &&
          <button
            className="fixed top-8 right-4 p-2 text-sm font-bold bg-gray-900 text-white rounded-2xl z-80"
            title={"Close Preview"}
            onClick={() => setShowPreview(false)}
          >
            Close
          </button>}
      </div>
    </section >

  )
}

export default VideosGrid