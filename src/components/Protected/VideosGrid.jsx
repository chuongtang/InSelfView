import React, { useState, useEffect } from 'react'
// import Placeholder from '../../images/vdPlaceHolder.svg'
import { useDispatch, useSelector } from 'react-redux';
import { AlertInfo, AlertWarning, AlertSuccess, AlertError } from '../Alerts'
import Loader from '../Loader'
import { listVideos } from '../../actions/videoActions';
import dotenv from 'dotenv';

const urlStart = import.meta.env.VITE_APPWRITE_VIEWLINK_P1
const urlEnd = import.meta.env.VITE_APPWRITE_VIEWLINK_P2
 

const VideosGrid = () => {

  const [showGrid, setShowGrid] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const dispatch = useDispatch();

  const videoList = useSelector((state) => state.videosList);
  const { loading, error, videos } = videoList;

  const videoCreate = useSelector((state) => state.videoCreate)
  const { success } = videoCreate

  useEffect(() => {
    dispatch(listVideos());
    // dispatch(viewVideo("6271fb3009848c49dac9"))
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
            <button className="flex px-5 py-3 font-medium text-white bg-blue-500 rounded-lg shadow-xl hover:bg-yellow-500"
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
          <div className="grid grid-cols-2 mt-8 lg:grid-cols-4 gap-x-4 gap-y-8" id="midGrid" >
            {videos?.map((video) => (
 
              <a key={video.$id}
                href={`https://${urlStart}${video.videoID}${urlEnd}`}
                className="relative block border border-gray-100"
              >
                <button
                  type="button"
                  name="like"
                  className="absolute p-2 text-white bg-black rounded-full right-4 top-4"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </button>
                
                <video className="max-h-30 w-auto mx-auto rounded-lg"
                Title={video.Title}
                loading="lazy"
                src={`https://${urlStart}${video.videoID}${urlEnd}`} 
                // control={true} 
                >

                </video>
                <div className="p-6">
                  <h5 className="mt-1 text-lg truncate">
                    Posted by: {video.CreatedBy}
                  </h5>


                  <h5 className="mt-1 text-lg font-bold truncate">
                    TITLE: {video.Title}
                  </h5>
                  {/* <p>playLink (id) of this video: {video.videoID}</p> */}
                  <p className="truncate font-bold text-sm">Video: {video.VideoName}</p>
                  <button
                    name="add"
                    type="button"
                    className="flex items-center justify-center w-full px-8 py-4 mt-4 bg-yellow-500 rounded-lg shadow-lg"
                  >
                    <span className="text-sm font-medium">
                      Preview / Play
                    </span>

                    <svg
                      className="w-5 h-5 ml-1.5"
                      xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </button>
                </div>
              </a>
            ))}
          </div>}

        {scrolled &&
          <a href="#gridTop">
            <button type="button" className="block fixed right-14 bottom-8 z-99 bg-rose-500 p-2 text-xs text-white rounded-lg shadow-lg font-bold animate-bounce"
            >Top ⇑</button></a>}

      </div>
    </section >

  )
}

export default VideosGrid