import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import { useDispatch, useSelector } from 'react-redux';
import { updateFieldInDB } from '../../actions/commentActions';
import { AlertWarning, AlertError, AlertSuccess } from '../Alerts';
import Loader from '../Loader'

const VideoPreviewer = ({ video }) => {

  const [playVideoID, setPlayVideoID] = useState("")
  const [currentVideoComments, setCurrentVideoComments] = useState([])
  const [showCommentSection, setShowCommentSection] = useState(true)
  const [commentDetail, setCommentDetail] = useState("")
  const [message, setMessage] = useState("")
  const [likeClicked, setLikeClicked] = useState(false)

  const commentCreate = useSelector((state) => state.commentCreate)
  const { loading, success, error } = commentCreate

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();

  const updtTotalLikestoDB = () => {

    try {
      let newLikes = {
        "TotalLikes": video.TotalLikes++
      }
      dispatch(updateFieldInDB(video.$id, newLikes))
    } catch (error) {
      setMessage(error.message)
    }

  }

  const addCommentToDB = () => {

    if (commentDetail == "") {
      return
    } else {
      try {
        // insert ⬇ newly added comment to array
        video.Comments.push(`- ${userInfo.name} : ${commentDetail}`)
        let NewCommentsArray = {
          "Comments": video.Comments
        }

        dispatch(updateFieldInDB(video.$id, NewCommentsArray))
        setCommentDetail("")
        setShowCommentSection(false)
      } catch (error) {

        setMessage(error.message)
      }

    }
  }

  useEffect(() => {
    setPlayVideoID(video.videoID);
  }, [video]);

  useEffect(() => { //Video.Comments is a local state 
    setCurrentVideoComments(video.Comments);

  }, [video.Comments]);

  return (
    <>
      {playVideoID !== "" &&
        (<div className="modal fade fixed top-0 left-0 w-full h-full outline-none  overflow-y-auto bg-gray-600 bg-opacity-80 z-60 ">
          <section className="relative max-w-screen-xl px-4 py-8 my-4 bg-white rounded-lg mx-auto">
            <div className="ml-4">
              <div>
                <h1 className="text-2xl font-bold lg:text-3xl">
                  {video.Title}
                </h1>

                <p className="mt-1 text-sm text-gray-500">
                  Posted by: <span className="font-bold">{video.CreatedBy}</span>
                </p>
              </div>

              <div className="grid gap-2 lg:items-start lg:grid-cols-4">
                <div className="lg:col-span-3">
                  <div className="relative mt-4">
                    <ReactPlayer
                      url={`https://crypgame.win/v1/storage/buckets/626f430157c288bb80eb/files/${playVideoID}/view?project=626706b0d57bfb074288&mode=admin`}
                      playing={true}
                      controls={true}
                      pip={false}
                      width='90%'
                      height='90%'
                      className="absolue top-0 left-0 rounded-2xl "
                    />
                    {likeClicked ? <p className="text-rose-500 animate-pulse">Total likes: {video.TotalLikes + 1} ♥</p> :
                      <button
                        type="button"
                        name="like"
                        className="absolute p-2 text-white bg-rose-500 rounded-full right-4 top-4 animate-bounce"
                        onClick={() => {
                          setLikeClicked(true)
                          updtTotalLikestoDB()
                        }}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                        </svg>
                      </button>}
                    {message && <AlertWarning message={message} />}
                    {error && <AlertError message={error} />}
                    {loading && <Loader />}
                  </div>
                </div>

                <div className="lg:top-0 lg:sticky">
                  {showCommentSection &&
                    <form className="space-y-4 lg:pt-8">
                      {message && <AlertWarning message={message} />}
                      {error && <AlertError message={error} />}
                      {loading && <Loader />}
                      <div className="p-2 bg-gray-100 border rounded-lg">

                        <label className="sr-only" htmlFor="comment">Co</label>
                        <textarea
                          className="w-full p-3 text-sm border-gray-200 rounded-lg"
                          placeholder="Comment?"
                          rows="6"
                          id="comment"
                          required
                          onChange={(e) =>
                            setCommentDetail(e.target.value)
                          }
                        ></textarea>
                      </div>
                      <button
                        className="w-full px-6 py-3 text-sm font-bold tracking-wide text-white uppercase bg-red-700 rounded-lg"
                        onClick={(e) => {
                          e.preventDefault()
                          addCommentToDB()
                        }}
                      >
                        Submit comment
                      </button>
                    </form>
                  }
                  <div className="lg:col-span-3">
                    <div className="prose max-w-none">
                      <p className="text-xl font-bold">
                        Reviews and Feedback
                      </p>
                      <ul className="overflow-clip">
                        {currentVideoComments?.map((comment, index) => <li key={index}>{comment}</li>)}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>)}
    </>
  )
}

export default VideoPreviewer