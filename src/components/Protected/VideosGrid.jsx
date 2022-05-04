import React, { useState, useEffect } from 'react'
import Placeholder from '../../images/vdPlaceHolder.svg'
import { useDispatch, useSelector } from 'react-redux';
import { AlertInfo, AlertWarning, AlertSuccess, AlertError } from '../Alerts'
import Loader from '../Loader'
import { listVideos, viewVideo } from '../../actions/videoActions';


const VideosGrid = () => {

  const dispatch = useDispatch();

  const videoList = useSelector((state) => state.videosList);
  const { loading, error, videos } = videoList;

  useEffect(() => {

    dispatch(listVideos());
  }, []);

  console.log("videos from useEffect", videos)
  console.log("loading from useEffect", loading)
  console.log("error from useEffect", error)

  return (
    <section>
      <div className="max-w-screen-xl px-4 py-8 mx-auto">
        <div className="relative max-w-3xl mx-auto text-center">
          <span className="absolute inset-x-0 h-px -translate-y-1/2 bg-black/10 top-1/2"></span>

          <h2 className="relative inline-block px-4 text-2xl font-bold text-center bg-white">
            View other's recording
          </h2>
        </div>

        <div className="grid grid-cols-2 mt-8 lg:grid-cols-4 gap-x-4 gap-y-8">
          {videos?.map((video) => (

            <a key={video.$id}
            href="/videoId"
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

              <img
                loading="lazy"
                alt="Build Your Own Drone"
                className="object-contain w-full h-56"
                src={Placeholder}
              />

              <div className="p-6">
                <p className="text-sm font-medium text-gray-600">
                  OWNER_ID: {video.$write[0]}
                </p>

                <h5 className="mt-1 text-lg font-bold truncate">
                  TITLE: {video.Title}
                </h5>
                <p>playLink (id) of this video: {video.videoID}</p>
                <p className="truncate">NAME: {video.VideoName}</p>
                <button
                  name="add"
                  type="button"
                  className="flex items-center justify-center w-full px-8 py-4 mt-4 bg-yellow-500 rounded-sm"
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

        </div>

        <div className="mt-4 text-center">
          <button type="button" className="text-xs text-gray-500 underline">Clear Recently Viewed</button>
        </div>
      </div>
    </section>

  )
}

export default VideosGrid