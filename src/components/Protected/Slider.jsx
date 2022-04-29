import React from 'react'

const Slider = ({ timer, handleTimer }) => {

  return (

    <div className="w-full justify-center font-mono text-lg">
      <input
        type="range"
        list="tickmarks"
        min={0}
        max={5}
        value={timer}
        onChange={handleTimer}
        step={1}
        className="w-full mt-12"
      >
        </input>
      <div> Time for answering: 0{timer} minutes</div>
    </div>
  );
}

export default Slider