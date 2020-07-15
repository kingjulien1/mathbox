import {
  useState,
  RefObject,
  useRef,
  useEffect,
  MouseEvent,
  TouchEvent,
} from "react";

//helper method to find pixel-exact position from MouseEvent
const findPosition = (
  event: MouseEvent | TouchEvent,
  canvasRef: RefObject<HTMLCanvasElement>
): { x: number; y: number } => {
  let x = (event as TouchEvent).changedTouches
    ? (event as TouchEvent).changedTouches[0].pageX
    : (event as MouseEvent).pageX;

  let y = (event as TouchEvent).changedTouches
    ? (event as TouchEvent).changedTouches[0].pageY
    : (event as MouseEvent).pageY;
  return {
    x: x - (canvasRef?.current?.offsetLeft || 0),
    y: y - (canvasRef.current?.offsetTop || 0),
  };
};

//tools to actually draw
export const useCanvasDrawingFeatures = (
  canvasRef: RefObject<HTMLCanvasElement>
) => {
  const [isDrawing, setIsDrawing] = useState<Boolean>(false);
  const contextRef = useRef(canvasRef.current?.getContext("2d"));

  useEffect(() => {
    contextRef.current = canvasRef.current?.getContext("2d");
  }, [canvasRef]);

  const draw = (event: MouseEvent | TouchEvent) => {
    if (!isDrawing) return;
    let { x, y } = findPosition(event, canvasRef);
    contextRef.current?.lineTo(x, y);
    contextRef.current?.stroke();
    contextRef.current?.beginPath();
    contextRef.current?.moveTo(x, y);
  };
  const beginDrawing = (event: MouseEvent | TouchEvent) => {
    setIsDrawing(true);
    draw(event);
  };
  const finishDrawing = () => {
    setIsDrawing(false);
    contextRef.current?.beginPath();
  };

  return { beginDrawing, finishDrawing, draw };
};
