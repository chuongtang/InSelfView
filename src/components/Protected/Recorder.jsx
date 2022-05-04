import React, { useState, useRef, useCallback } from "react";
import Webcam from "react-webcam";
import Slider from "./Slider";
import Questions from './Questions'



const Recorder = () => {
  const [timer, setTimer] = useState(2);
  const handleTimer = (event) => {
    setTimer(event.target.value);
  };

  // Webcam npm
  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [capturing, setCapturing] = useState(false);
  const [preview, setPreview] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);

  // Handling data
  const handleDataAvailable = useCallback(
    ({ data }) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data));
      }
    },
    [setRecordedChunks]
  );

  const handleStartCaptureClick = useCallback(() => {
    setCapturing(true);
    console.log("Timer in recording button:", timer);
    setTimeout(handleStopCaptureClick, timer * 60000);
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: "video/webm",
    });
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    );
    mediaRecorderRef.current.start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleDataAvailable, timer]);

  const handleStopCaptureClick = useCallback(() => {
    if (mediaRecorderRef.current.state === "inactive") {
      setCapturing(false);
    } else {
      mediaRecorderRef.current.stop();
    }
    setCapturing(false);
  }, [mediaRecorderRef, setCapturing]);

  const handleDownload = useCallback(() => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/webm",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.style = "display: none";
      a.href = url;
      a.download = "react-webcam-stream-capture.webm";
      a.click();
      window.URL.revokeObjectURL(url);
      setRecordedChunks([]);
    }
  }, [recordedChunks]);

  return (
    <div className="py-16 bg-gradient-to-br from-blue-100 to-gray-300">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="space-y-6 md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-blue-900 font-bold md:text-5xl">Practice makes perfect</h2>
            <div className="space-y-4">
              <p className="text-gray-600">Select a category for a random interview question.</p>
              <p className="mt-4 text-gray-600"> Practice and record your response, then share your videos for rating and comments from fellow users.</p>
              <p className="mt-4 text-gray-600"> Review other videos. Give constructive feedback and build great community</p>

              <Questions />

              <Slider
                timer={timer}
                handleTimer={handleTimer}
              />
            </div>

          </div>
          <div className="md:5/12 lg:w-6/12 rounded-lg">
            <Webcam audio={false} ref={webcamRef} className="py-4 " />
            {capturing ? (
              <button
                className="flex bg-red-700 hover:bg-red-300 text-sm md:text-lg text-white text-center p-2 rounded-lg shadow-lg"
                onClick={handleStopCaptureClick}
              >
                <svg width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                  <path d="M6.5 7H3.6C3.26863 7 3 7.26863 3 7.6V16.4C3 16.7314 3.26863 17 3.6 17H14.4C14.7314 17 15 16.7314 15 16.4V15M11.5 7H14.4C14.7314 7 15 7.26863 15 7.6V10.719C15 11.2277 15.5933 11.5056 15.9841 11.1799L20.0159 7.82009C20.4067 7.49443 21 7.77232 21 8.28103V15.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3 3L21 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Stop Recording  (Auto-stop at {timer} minutes)
              </button>
            ) : (
              <button
                className="flex bg-gray-400 hover:bg-gray-900 text-white text-sm md:text-lg text-center py-2 px-2 rounded-lg shadow-lg"
                onClick={handleStartCaptureClick}
              >
                <svg width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                  <path d="M15 12V16.4C15 16.7314 14.7314 17 14.4 17H3.6C3.26863 17 3 16.7314 3 16.4V7.6C3 7.26863 3.26863 7 3.6 7H14.4C14.7314 7 15 7.26863 15 7.6V12ZM15 12L20.0159 7.82009C20.4067 7.49443 21 7.77232 21 8.28103V15.719C21 16.2277 20.4067 16.5056 20.0159 16.1799L15 12Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Start Recording
              </button>
            )}
          </div>
          <div className="mt-2 text-slate-500">{recordedChunks.length > 0 && (
            <div className="d-flex">
              <button
                className="flex bg-transparent border border-green-500 text-sm md:text-lg text-green-500 hover:bg-green-500 hover:text-white text-center p-2 my-4 rounded-lg shadow-lg"
                onClick={handleDownload}
              >
                <svg width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-2">
                  <path d="M12 13V22M12 22L15.5 18.5M12 22L8.5 18.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M20 17.6073C21.4937 17.0221 23 15.6889 23 13C23 9 19.6667 8 18 8C18 6 18 2 12 2C6 2 6 6 6 8C4.33333 8 1 9 1 13C1 15.6889 2.50628 17.0221 4 17.6073" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Download
              </button>
              <button className="flex bg-transparent border border-yellow-500 text-sm md:text-lg text-yellow-500 hover:bg-yellow-500 hover:text-white text-center p-2 my-4 rounded-lg shadow-lg"
                onClick={() => { setPreview(true) }}>
                <svg width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-2">
                  <path d="M2 16V8C2 4.68629 4.68629 2 8 2H16C19.3137 2 22 4.68629 22 8V16C22 19.3137 19.3137 22 16 22H8C4.68629 22 2 19.3137 2 16Z" stroke="currentColor" />
                  <path d="M6 13V11C6 9.89543 6.89543 9 8 9H11C12.1046 9 13 9.89543 13 11V13C13 14.1046 12.1046 15 11 15H8C6.89543 15 6 14.1046 6 13Z" stroke="currentColor" />
                  <path d="M17.0399 9.22L13.9733 11.52C13.6533 11.76 13.6533 12.24 13.9733 12.48L17.0399 14.78C17.4355 15.0767 17.9999 14.7944 17.9999 14.3V9.7C17.9999 9.20557 17.4355 8.92334 17.0399 9.22Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                See it first
              </button>
            </div>
          )}
          </div>
        </div>
      </div>

      {
        preview &&
        (<div className="modal fade fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto z-60">
          <div className="modal-dialog modal-fullscreen relative w-auto pointer-events-none mx-2">
            <div
              className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current py-8">
              <div
                className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                <h5 className="text-xl font-medium leading-normal text-yellow-500 mx-auto" id="videoModalFullscreenLabel">
                  Preview your recording
                </h5>
              </div>
              <div className="modal-body relative p-2">
                <video className="h-lg w-auto mx-auto rounded-lg" controls>
                  <source
                    src={URL.createObjectURL(
                      new Blob(recordedChunks, { type: "video/webm" })
                    )}
                    type="video/webm"
                  />
                </video>
              </div>
              <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-center p-4 border-t border-gray-200 rounded-b-md">
                <button className="flex bg-transparent border border-red-400 text-sm md:text-lg text-red-400 hover:bg-red-400 hover:text-white text-center p-2 my-4 rounded-lg shadow-lg mr-4" onClick={() => setPreview(false)}>
                  X Close Preview
                </button>
                <button
                  className="flex bg-transparent border border-green-500 text-sm md:text-lg text-green-500 hover:bg-green-500 hover:text-white text-center p-2 my-4 rounded-lg shadow-lg"
                  onClick={handleDownload}
                >
                  <svg width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-2">
                    <path d="M12 13V22M12 22L15.5 18.5M12 22L8.5 18.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M20 17.6073C21.4937 17.0221 23 15.6889 23 13C23 9 19.6667 8 18 8C18 6 18 2 12 2C6 2 6 6 6 8C4.33333 8 1 9 1 13C1 15.6889 2.50628 17.0221 4 17.6073" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>)
      }
    </div>
  );
};

export default Recorder;
