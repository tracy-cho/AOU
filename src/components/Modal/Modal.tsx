import React, { useState } from "react";

import "./Modal.scss";

export type ModalProps = {
  cx?: string;
  close: any;
};

export const Modal: React.FC<ModalProps> = ({
  cx = "",
  children,
  close,
}) => {
  return (
    <div className={"Modal-wrapper"}>
      <div className={`Modal ${cx}`}>
        <div className="close" onClick={close}>X</div>
        <div className={"contents"}>{children}</div>
      </div>
    </div>
  );
};
