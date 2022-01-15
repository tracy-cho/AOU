import React, { useEffect, useRef, useState } from "react";

import "./Star.scss";

export type StarProps = {
  cx?: string;
};

export const Star: React.FC<StarProps> = ({ cx }) => {
  const el = useRef<HTMLCanvasElement>(null);
  const elCtx = useRef<CanvasRenderingContext2D | null>(null);

  const [{ width, height }, setWindowSize] = useState({ width: 0, height: 0 });

  const [stars] = useState(() => {
    const returnVal = [];
    for (let i = 0; i < 2000; i++) {
      returnVal.push({
        x: Math.random() * 1000 - 500,
        y: Math.random() * 600 - 300,
        z: Math.random() * 1000,
      });
    }
    return returnVal;
  });

  useEffect(() => {
    if (!el.current) return;
    elCtx.current = el.current.getContext("2d");
    let c = elCtx.current;
    const putPixel = (x: number, y: number, d: number) => {
      c!.fillStyle = `rgba(${Math.random() * 155 + 100},${
        Math.random() * 155 + 100
      },${Math.random() * 155 + 100},${d})`;
      c!.fillRect(x, y, 1, 1);
    };

    const moveStars = (distance: number) => {
      const count = stars.length;
      for (let i = 0; i < count; i++) {
        const s = stars[i];
        s.z -= distance;
        while (s.z <= 1) {
          s.z += 1000;
        }
      }
    };

    let prevTime: number;
    const init = (time: number) => {
      prevTime = time;
      requestAnimationFrame(tick);
    };
    const tick = (time: number) => {
      let elapsed = time - prevTime;
      prevTime = time;

      moveStars(elapsed * 0.1);

      c!.fillStyle = "#111";
      c!.fillRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      const count = stars.length;
      for (let i = 0; i < count; i++) {
        const star = stars[i];

        const x = cx + star.x / (star.z * 0.001);
        const y = cy + star.y / (star.z * 0.001);

        if (x < 0 || x >= width || y < 0 || y >= height) {
          continue;
        }

        const d = star.z / 1000.0;
        const b = 1 - d * d;

        putPixel(x, y, b);
      }

      requestAnimationFrame(tick);
    };
    requestAnimationFrame(init);
  });

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  return <canvas id={"Star"} ref={el} width={width} height={height} />;
};

export default Star;
