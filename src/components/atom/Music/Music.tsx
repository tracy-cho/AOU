import React, { useState, useEffect } from "react";

import "./Music.scss";

const useAudio = () => {
  const [audio] = useState(new Audio(process.env.PUBLIC_URL + "bgm.mp3"));
  const [playing, setPlaying] = useState(false);

  const toggle = (): any => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => {
      audio.currentTime = 0;
      setPlaying(true);
    });
    return () => {
      audio.addEventListener("ended", () => {
        audio.currentTime = 0;
        setPlaying(true);
      });
    };
  }, []);

  return [playing, toggle];
};

const Music = () => {
  const [playing, toggle] = useAudio();

  return (
    <button
      className={"Music"}
      // @ts-ignore
      onClick={toggle}
    >
     {playing ? " ∥ " : `▶`} <span> -  Eclipse </span>
    </button>
  );
};

export default Music;
