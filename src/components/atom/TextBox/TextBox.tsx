import React from "react";

import "./TextBox.scss";

export type TextBoxProps = {
  cx?: string;
};

export const TextBox: React.FC<TextBoxProps> = ({ cx = "", children }) => {
  return <article className={`TextBox ${cx}`}>{children}</article>;
};