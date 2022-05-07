import React, { useState, useEffect } from 'react'
import dotenv from 'dotenv';
const urlStart = import.meta.env.VITE_APPWRITE_VIEWLINK_P1
const urlEnd = import.meta.env.VITE_APPWRITE_VIEWLINK_P2
import ReactPlayer from 'react-player'
import { Rating } from 'react-simple-star-rating'


const VideoPreviewer = ({videoID}) => {

  const [playVideoID, setPlayVideoID] = useState("")

  const [ratingValue, setRatingValue] = useState(3)

  const [comments, setComments] = useState("")

  const handleRating = (rate) => {
    setRatingValue(rate)
  }

  const tooltipArray = [
    'Terrible',
    'Terrible+',
    'Bad',
    'Bad+',
    'Average',
    'Average+',
    'Great',
    'Great+',
    'Awesome',
    'Awesome+'
  ]
  const fillColorArray = [
    '#f17a45',
    '#f17a45',
    '#f19745',
    '#f19745',
    '#f1a545',
    '#f1a545',
    '#f1b345',
    '#f1b345',
    '#f1d045',
    '#f1d045'
  ]

  useEffect(() => {
    setPlayVideoID(videoID);
    
  }, [videoID]);

  return (
    <div className="modal fade fixed top-0 left-0 w-full h-full outline-none  overflow-y-auto bg-gray-500 bg-opacity-40 z-60 ">
      {playVideoID !== "" &&
        (<section>
          <div className="relative max-w-screen-xl px-4 py-8 mx-auto">
            <div>
              <h1 className="text-2xl font-bold lg:text-3xl">
                {playVideoID} here is the play ID
              </h1>

              <p className="mt-1 text-sm text-gray-500">
                HEre is the posted by......
              </p>
            </div>

            <div className="grid gap-8 lg:items-start lg:grid-cols-4">
              <div className="lg:col-span-3">
                <div className="relative mt-4">
                  <ReactPlayer
                    url={`https://crypgame.win/v1/storage/buckets/626f430157c288bb80eb/files/${playVideoID}/view?project=626706b0d57bfb074288&mode=admin`}
                    playing={true}
                    controls={true}
                    pip={false}
                    width='90%'
                    height='90%'
                    className="absolue top-0 left-0 "
                  />

                </div>
              </div>

              <div className="lg:top-0 lg:sticky">
                <form className="space-y-4 lg:pt-8">
                  <Rating
                    onClick={handleRating}
                    ratingValue={ratingValue}
                    size={30}
                    transition
                    allowHalfIcon
                    showTooltip
                    tooltipArray={tooltipArray}
                    fillColorArray={fillColorArray}
                  />

                  <div className="p-4 bg-gray-100 border rounded">

                    <label className="sr-only" htmlFor="comment">Co</label>
                    <textarea
                      className="w-full p-3 text-sm border-gray-200 rounded-lg"
                      placeholder="Comment?"
                      rows="8"
                      id="comment"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 text-sm font-bold tracking-wide text-white uppercase bg-red-700 rounded"
                  >
                    Submit comment
                  </button>

                  <button
                    type="button"
                    className="w-full px-6 py-3 text-sm font-bold tracking-wide uppercase bg-gray-100 border border-gray-300 rounded"
                  >
                    Done? close this page?
                  </button>
                </form>
              </div>

              <div className="lg:col-span-3">
                <div className="prose max-w-none">


                  <p className="text-xl font-bold">
                    all comments for this video will be render here.
                  </p>
                  <ul>
                    <li>User1: dkjasnfkjcnsl</li>
                    <li>User2: ojfn</li>
                    <li>User3: jyktkjg</li>
                    <li>User4: kmgbvksmfpb</li>
                  </ul>


                </div>
              </div>
            </div>
          </div>
        </section>)
      }
    </div>
  )
}

export default VideoPreviewer