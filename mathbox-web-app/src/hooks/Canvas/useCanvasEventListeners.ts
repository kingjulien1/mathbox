import { RefObject, MouseEvent, TouchEvent } from "react";
import { useCanvasDrawingFeatures } from "./useCanvasDrawingFeatures";

//event handlers
export const useCanvasEventListners = (
  canvasRef: RefObject<HTMLCanvasElement>
) => {
  const { beginDrawing, finishDrawing, draw } = useCanvasDrawingFeatures(
    canvasRef
  );

  const begin = (event: MouseEvent | TouchEvent): void => {
    beginDrawing(event);
  };
  const drawing = (event: MouseEvent | TouchEvent): void => {
    draw(event);
  };

  return { begin, finish: finishDrawing, draw: drawing };
};
