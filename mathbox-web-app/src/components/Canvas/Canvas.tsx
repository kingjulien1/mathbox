import React, { FunctionComponent, useRef } from "react";
import { useCanvas, useCanvasResize } from "../../hooks/Canvas";

const Canvas: FunctionComponent = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { begin, finish, draw } = useCanvas(canvasRef);
  useCanvasResize(canvasRef);

  return (
    <canvas
      ref={canvasRef}
      //desktop
      onMouseDown={begin}
      onMouseMove={draw}
      onMouseUp={finish}
      onMouseOut={finish}
      //mobile
      onTouchStart={begin}
      onTouchMove={draw}
      onTouchCancel={finish}
      onTouchEnd={finish}
      width={window.innerWidth}
      height={window.innerHeight - 64}
    ></canvas>
  );
};

export default Canvas;
