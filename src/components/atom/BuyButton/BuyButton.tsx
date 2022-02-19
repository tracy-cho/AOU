import React from "react";

import "./BuyButton.scss";

export type BuyButtonProps = {
  cx?: string;
  onClick: any;
};

export const BuyButton: React.FC<BuyButtonProps> = ({ cx = "", onClick }) => {
  return (
    <button
      className={`BuyButton ${cx}`}
      onClick={() => {
        onClick();
      }}
    >
      구매하기
    </button>
  );
};