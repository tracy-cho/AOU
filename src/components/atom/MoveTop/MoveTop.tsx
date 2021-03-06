import React  from "react";

import "./MoveTop.scss";
import { useLocation } from "react-router-dom";

export const MoveTop = () => {
  const location = useLocation();

  const scrollToTop = () => {
    const a = document.querySelector("main");
    if (!!a) {
      a.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (location.pathname === "/") return null;
  return (
    <img
      onClick={() => {
        scrollToTop();
      }}
      className={"MoveTop"}
      src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAwCAQAAAAPt2SpAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfmAQgVOyWZRgmEAAADy0lEQVRYw8WXX2gUVxTGv02iEqjdINoWStlZxFgsNpuktfRpx2ohL8oKQlArSZHmQWgrhYIQadI/UFoophSF9CUrigQE/72IrZgRpWBB3ARsVaTNSsTWoiREUtNEvj5k9mbOvXd34+wkOfswN+d858xv7r3nziRGVGgb8Bi/VViDlfxW8SRJ8jBrK6lTCUILR1iwm2xeeIha/kBpk+xk9UJCNPMmbeYxuTAQ1ezkJIvZOHfOP0SSl8VNr7GVbbwtfCcYn0+IPRwP3Owpe/kCQTDBfoExwnfmB6LQjgUb5nsivpd/ifh3XBo1RAvva1P+qqF5kxeEZojro4Oo5WFRfJQfcZlV+Tw/51RAOcFPooHYoLWjx6aS+nc5JPTn+HJlEHo7TvBLPlcW+yX+KDAeclt4iCR/EcUGudnQNLGfWa4x/Dt4V+T2lYIvjtAh2nGKvVylKarYwb/9Tmk18ut5VmD8wbefDUJvxzvcZWgSPCo0h/iiAfkp/wkopvmV/e1iQ2jhA1G+n/WGZjt/N47sX7nJ0L3FK0JzlWvLQ9SyVyQ94odcomni/J5PaLMxfsYaTb2c3wj1ODtKQ+jteJFvGNxpXmMp+8lyRG3lDaE5I/eXbMfpgPBffsHlxjwdENvVbvf5gYHhMCs0D9hiQiR5VYiGuNEo9Dp/LgtQsON8Rcuu5vt+LxVMfRTa2vE/9nKFVqKGHdp2LWe3uMV4jNd4Xmj8j0IQ7BOBEctnyWoeeyaAGXvKb7lSq7SM3ZwIaCa5m4ixFf2VfvVXaI1VSC4yArCuarEJAMAOsQ+xor+cUnnIKK+DboyqSE5kuHDRE4iaxv2WLZUu/sbjgK9ps7xNrvuxAUvebFS3nWGXI4sjhi+P9hIZeWSKzUaN1euq0SX/moDjj2au3UrRhmGlGkRWA0nAUdE8egJ5ZZdj1gqT2SW8fcr/MUnyoPpPI6EtRxfJPwNLEuFynFajmSfbp54/H9i4BXPQoKJWCwfh+dc06vxRxogFLVW6XDiIMf/qKs/saNSiPx09hFcymhN/DcNDu4JusKfUIGqTM3FEtHJ3dDPhlIymikbaAjsnQohhNcqpUZ01J44uZIsVDLccDRgEENwdsxCuUKbhwoGjeSOBcH2IPDy4AEbVU8a127nF9kHQwrVouxplkIOHlDqaM2HKhZuJFNL+bcfQGPDH0TOHbCIWxUwAWcSt3ro55MZ0R1gIBx7SwpPAqXCLUX45DvqHj1k+BQ85dSCnhCKFLn80J6wY9+PrkLMRle2qwr1FRgDuxQisx9JFRHiMW/8DpsmNbk4yZB8AAAAASUVORK5CYII="
      alt=""
    />
  );
};
