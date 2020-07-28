import { RefObject, useRef } from "react";
import Konva from "konva";
import { Line } from "konva/types/shapes/Line";
import { Layer } from "konva/types/Layer";
import { ToolOptions, Palette } from "../../Context";

export const defaultLineConfig = {
  strokeWidth: 2,
  stroke: Palette.default,
  bezier: true,
  draggable: true,
  globalCompositeOperation: "source-over",
} as const;

export const usePen = (layerRef: RefObject<Layer>, options: ToolOptions) => {
  const isDrawing = useRef(false);
  const line = useRef<Line>(null);

  const start = () => {
    isDrawing.current = true;
    let { x, y } = layerRef.current.getStage().getPointerPosition();
    line.current = new Konva.Line({
      ...defaultLineConfig,
      ...options,
      points: [x, y],
    });
    layerRef.current.add(line.current);
  };

  const draw = () => {
    if (!isDrawing.current) return;
    let { x, y } = layerRef.current.getStage().getPointerPosition();
    line.current.points([...line.current.points(), x, y]);
    layerRef.current.batchDraw();
  };

  const end = () => {
    isDrawing.current = false;
    line.current?.cache();
    line.current = null;
  };

  return [start, draw, end];
};
