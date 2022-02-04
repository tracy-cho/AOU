import React from "react";

import "./Countdown.scss";

export type CountdownProps = {
  cx?: string;
};

export const Countdown: React.FC<CountdownProps> = ({ cx = "" }) => {
  return (
    <div className={"Countdown"}>
      H e l l o   A r c h i t e c t s !
    </div>
  );
};
