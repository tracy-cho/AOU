import React, { useEffect, useState } from "react";

import "./Countdown.scss";

export type CountdownProps = {
  cx?: string;
};

export const Countdown: React.FC<CountdownProps> = ({ cx = "" }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(`2022-02-03 00:00:00`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        일: Math.floor(difference / (1000 * 60 * 60 * 24)),
        시: Math.floor((difference / (1000 * 60 * 60)) % 24),
        분: Math.floor((difference / 1000 / 60) % 60),
        초: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<any>(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents: any = Object.keys(timeLeft).map((interval) => (
    <span key={interval}>
      {`${
        timeLeft[interval] < 10 ? `0${timeLeft[interval]}` : timeLeft[interval]
      }${interval}`}
    </span>
  ));

  return (
    <div className={"Countdown"}>
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </div>
  );
};
