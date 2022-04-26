import React from 'react'

const Slider = ({ timer, handleTimer }) => {
  const styleObj = {
    width: "20rem",
    margin: '0.5rem',
    justifyContent: 'center'
  };
  return (

    <div className="w-full m-2 justify-center font-mono text-lg">
      <input
        type="range"
        list="tickmarks"
        min={0}
        max={5}
        value={timer}
        onChange={handleTimer}
        step={1}
        className="w-full"
      >
        </input>
      <div> Auto stop in: 0{timer} minutes</div>
    </div>
  );
}

export default Slider