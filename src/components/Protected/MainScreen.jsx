import React, { useState, useRef, useCallback } from "react";
import Header from "../Header";
import VideosGrid from './VideosGrid';
import Recorder from './Recorder';
import Uploader from './Uploader';



const MainScreen = () => {

  return (
    <div>
      <Header />
      <Recorder />
      <Uploader />
      <VideosGrid />
      {/* </div> */}
    </div>
  )
}

export default MainScreen;