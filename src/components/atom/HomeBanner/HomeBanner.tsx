import React from "react";

import "./HomeBanner.scss";

export type HomeBannerProps = {
  cx?: string;
};

export const HomeBanner: React.FC<HomeBannerProps> = ({
  cx = "",
  children,
}) => {
  return (
    <div className={`HomeBanner ${cx}`}>
      <div className="l" />
      {children}
      asdasdasdasdasdasdasdasdasdasd
      <div className="r" />
    </div>
  );
};