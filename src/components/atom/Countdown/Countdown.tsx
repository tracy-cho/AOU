import React from "react";

import "./Countdown.scss";

export type CountdownProps = {
  cx?: string;
};

export const Countdown: React.FC<CountdownProps> = ({ cx = "" }) => {
  return (
    <div className={"Countdown"}>
      Hello  Architects!
    </div>
  );
};
