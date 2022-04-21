import React, { useState } from "react";
import Webcam from "react-webcam";
import Slider from "./Slider";
// import ReactModal from "react-modal";



const Recorder = () => {
  const [timer, setTimer] = useState(1.5);
  const handleTimer = (event) => {
    setTimer(event.target.value);
  };

  // Webcam npm
  const webcamRef = React.useRef(null);
  const mediaRecorderRef = React.useRef(null);
  const [capturing, setCapturing] = React.useState(false);
  const [preview, setPreview] = React.useState(false);
  const [recordedChunks, setRecordedChunks] = React.useState([]);

  // Handling data
  const handleDataAvailable = React.useCallback(
    ({ data }) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data));
      }
    },
    [setRecordedChunks]
  );

  const handleStartCaptureClick = React.useCallback(() => {
    setCapturing(true);
    // console.log("Timer in recording button:", timer);
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

  const handleStopCaptureClick = React.useCallback(() => {
    if (mediaRecorderRef.current.state === "inactive") {
      setCapturing(false);
    } else {
      mediaRecorderRef.current.stop();
    }
    setCapturing(false);
  }, [mediaRecorderRef, setCapturing]);

  const handleDownload = React.useCallback(() => {
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

  const closeModal = () => {
    document.getElementById("previewModal").style.display = "none";
    setPreview(false);
  };

  return (
    <div >

      <div className="flex">
        <Webcam audio={true} ref={webcamRef} />
        <div>
          <Slider
            timer={timer}
            handleTimer={handleTimer}

          />
          <div>
            <div md="auto">
              {capturing ? (
                <button
                  variant="secondary"
                  // color="secondary"
                  onClick={handleStopCaptureClick}
                  style={{ margin: "1.25rem" }}
                >
                  ⬜ Stop Recording (Auto stop in {timer} minutes)
                </button>
              ) : (
                <button
                  style={{ margin: "2rem" }}
                  onClick={handleStartCaptureClick}
                >
                  🔴 Start Recording
                </button>
              )}
            </div>
          </div>
          <div>
            <div md="auto">
              {recordedChunks.length > 0 && (
                <div className="d-flex">
                  <button
                    variant="success"
                    onClick={handleDownload}
                    style={{ marginLeft: "2rem" }}
                  >
                    ⇓ Download
                  </button>
                  <button style={{ marginLeft: "1.5rem" }} variant="info" onClick={() => setPreview(true)}>
                    📽 Preview
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <ReactModal
        isOpen={preview}
        ariaHideApp={false}
        id="previewModal"
        // onAfterClose={setPreview(false)}
        style={{
          content: {
            // background: "#d6ebfd",
            width: "fit-content",
            height: "fit-content",
            background: "linear-gradient(145deg, #ffffff, #d6dcdd)",
            boxShadow: "20px 20px 60px #cacfd1 -20px -20px 60px #ffffff",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "2rem",
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "25vw",
          },
        }}
      >
        <header>
          <h4>Preview your recording</h4>
        </header>

        <video style={{ margin: "0.5rem" }} controls>
          <source
            src={URL.createObjectURL(
              new Blob(recordedChunks, { type: "video/webm" })
            )}
            type="video/webm"
          />
        </video>
        <div style={{ display: "flex" }}>
          <button
            variant="outline-danger"
            onClick={closeModal}
          >
            X Close preview modal
          </button>
          <button
            style={{ marginLeft: "4rem" }}
            variant="outline-success"
            onClick={handleDownload}
          >
            ⇓ Download this video
          </button>
        </div>
      </ReactModal>
    </div>
  );
};

export default Recorder;
