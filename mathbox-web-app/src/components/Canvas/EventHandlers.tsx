import { MouseEvent, TouchEvent, useState, RefObject } from "react";

const useDrawingTools = (
  context: CanvasRenderingContext2D | null | undefined
) => {
  const [isDrawing, setIsDrawing] = useState<Boolean>(false);
  //line style
  context?.lineCap && (context.lineCap = "round");
  context?.lineWidth && (context.lineWidth = 2);
  const draw = (x: number, y: number) => {
    if (!isDrawing) return false;
    context?.lineTo(x, y);
    context?.stroke();
    context?.beginPath();
    context?.moveTo(x, y);
  };
  const beginDrawing = (x: number, y: number) => {
    setIsDrawing(true);
    draw(x, y);
  };
  const finishDrawing = () => {
    setIsDrawing(false);
    context?.beginPath();
  };

  return { beginDrawing, finishDrawing, draw };
};

export const useMouseEvents = (canvasRef: RefObject<HTMLCanvasElement>) => {
  const context = canvasRef.current?.getContext("2d");
  const [offsetLeft, offsetTop] = [
    canvasRef.current?.offsetLeft || 0,
    canvasRef.current?.offsetTop || 66,
  ];
  const findPosition = (
    event: MouseEvent | TouchEvent
  ): { x: number; y: number } => {
    let x = (event as TouchEvent).changedTouches
      ? (event as TouchEvent).changedTouches[0].pageX
      : (event as MouseEvent).pageX;

    let y = (event as TouchEvent).changedTouches
      ? (event as TouchEvent).changedTouches[0].pageY
      : (event as MouseEvent).pageY;
    return { x: x - offsetLeft, y: y - offsetTop };
  };
  const { beginDrawing, finishDrawing, draw } = useDrawingTools(context);
  const begin = (event: MouseEvent | TouchEvent): void => {
    let { x, y } = findPosition(event);
    beginDrawing(x, y);
  };
  console.log({ offsetTop });
  const drawing = (event: MouseEvent | TouchEvent): void => {
    //draw movement on canvas
    let { x, y } = findPosition(event);
    draw(x, y);
  };

  return { begin, finish: finishDrawing, draw: drawing };
};
