import React, { useState, useEffect, useRef } from 'react';
import VIDEO from './Video.mp4';

const RefExamples = () => {
  const [playing, setPlaying] = useState(true);
  const eleRef = useRef();
  const videoRef = useRef();
  console.log(videoRef);

  useEffect(() => {
    eleRef.current.style.color = "teal";
    eleRef.current.innerText = "React Ref";
  }, []);

  let playORpause = () => {
    if (playing) {
      videoRef.current.play();
      console.log(playing);
      setPlaying(false);
    } else {
      videoRef.current.pause();
      console.log(playing);
      setPlaying(true);
    }
  };

  return (
    <div>
      <h1 ref={eleRef}>Ref Example</h1>
      <video src={VIDEO} ref={videoRef} onClick={playORpause}></video>
    </div>
  );
};

export default RefExamples;