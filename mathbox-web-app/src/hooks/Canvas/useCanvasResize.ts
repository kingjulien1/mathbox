import { RefObject } from "react";
import { useEventListener } from "../useEventListener";

export const useCanvasResizingEvent = (
  canvasRef: RefObject<HTMLCanvasElement>
): void => {
  //dynamically resize canvas
  const onResize = (event: Event): void => {
    if (canvasRef.current?.width) canvasRef.current.width = window.innerWidth;
    if (canvasRef.current?.height) canvasRef.current.width = window.innerHeight;
  };
  useEventListener("resize", onResize);
};
