import {
  MouseEvent,
  TouchEvent,
  useState,
  RefObject,
  useRef,
  useEffect,
} from "react";
import { useEventListener } from "./EventListener";

//helper method to find exact position on screen
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
const useDrawingFeatures = (canvasRef: RefObject<HTMLCanvasElement>) => {
  const [isDrawing, setIsDrawing] = useState<Boolean>(false);
  //line style
  const contextRef = useRef(canvasRef.current?.getContext("2d"));

  useEffect(() => {
    contextRef.current = canvasRef.current?.getContext("2d");
  }, [canvasRef]);

  const draw = (x: number, y: number) => {
    if (!isDrawing) return false;
    contextRef.current?.lineTo(x, y);
    contextRef.current?.stroke();
    contextRef.current?.beginPath();
    contextRef.current?.moveTo(x, y);
  };
  const beginDrawing = (x: number, y: number) => {
    setIsDrawing(true);
    draw(x, y);
  };
  const finishDrawing = () => {
    setIsDrawing(false);
    contextRef.current?.beginPath();
  };

  return { beginDrawing, finishDrawing, draw };
};

//event handlers
export const useCanvas = (canvasRef: RefObject<HTMLCanvasElement>) => {
  const { beginDrawing, finishDrawing, draw } = useDrawingFeatures(canvasRef);

  const begin = (event: MouseEvent | TouchEvent): void => {
    let { x, y } = findPosition(event, canvasRef);
    beginDrawing(x, y);
  };
  const drawing = (event: MouseEvent | TouchEvent): void => {
    //draw movement on canvas
    let { x, y } = findPosition(event, canvasRef);
    draw(x, y);
  };

  return { begin, finish: finishDrawing, draw: drawing };
};

export const useCanvasResize = (
  canvasRef: RefObject<HTMLCanvasElement>
): void => {
  //dynamically resize canvas
  const onResize = (event: Event): void => {
    if (canvasRef.current?.width) canvasRef.current.width = window.innerWidth;
    if (canvasRef.current?.height) canvasRef.current.width = window.innerHeight;
  };
  useEventListener("resize", onResize);
};
