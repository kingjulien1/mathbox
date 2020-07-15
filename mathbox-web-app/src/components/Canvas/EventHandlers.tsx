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
  const { beginDrawing, finishDrawing, draw } = useDrawingTools(context);
  const begin = (event: MouseEvent): void => {
    const x = event.pageX - offsetLeft;
    const y = event.pageY - offsetTop;
    beginDrawing(x, y);
  };
  console.log({ offsetTop });
  const drawing = (event: MouseEvent): void => {
    //draw movement on canvas
    const x = event.pageX - offsetLeft;
    const y = event.pageY - offsetTop;
    draw(x, y);
  };

  return { begin, finish: finishDrawing, draw: drawing };
};

export const useTouchEvents = (canvasRef: RefObject<HTMLCanvasElement>) => {
  const [isDrawing, setIsDrawing] = useState<Boolean>(false);
  const onTouchStart = (event: TouchEvent<HTMLCanvasElement>): void => {
    //begins drawing
    setIsDrawing(true);
    console.log("starts drawing");
  };

  const onTouchMove = (event: TouchEvent<HTMLCanvasElement>): void => {
    //draws
    if (!isDrawing) return;
    console.log("draws");
  };

  const onTouchEnd = (event: TouchEvent<HTMLCanvasElement>): void => {
    //ends drawing
    setIsDrawing(false);
    console.log("ends drawing");
  };
  const onTouchCancel = onTouchEnd;

  return { onTouchStart, onTouchMove, onTouchCancel, onTouchEnd };
};
