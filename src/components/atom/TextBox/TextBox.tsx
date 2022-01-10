import React from "react";

import "./TextBox.scss";

export type TextBoxProps = {
  cx?: string;
};

export const TextBox: React.FC<TextBoxProps> = ({ cx = "", children }) => {
  return <div className={`TextBox ${cx}`}>{children}</div>;
};