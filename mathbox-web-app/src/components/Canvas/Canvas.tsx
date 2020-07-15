import React, { FunctionComponent, useRef } from "react";
import { useCanvasResizingEvent } from "../../hooks/Canvas/useCanvasResize";
import { useCanvasEventListners } from "../../hooks/Canvas/useCanvasEventListeners";

const Canvas: FunctionComponent = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  //event listeneres for canvas
  const { begin, finish, draw } = useCanvasEventListners(canvasRef);
  //register on resize event
  useCanvasResizingEvent(canvasRef);

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
