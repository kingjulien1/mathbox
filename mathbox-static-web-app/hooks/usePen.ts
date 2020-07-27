import Konva from "konva";
import { useState, RefObject } from "react";
import { Line } from "konva/types/shapes/Line";
import { Layer } from "konva/types/Layer";

export const usePen = (layer: RefObject<Layer>) => {
  let isDrawing = false;
  let line: Line = null;

  const start = () => {
    isDrawing = true;
    let { x, y } = layer.current.getStage().getPointerPosition();

    line = new Konva.Line({
      strokeWidth: 2,
      stroke: "#1A202C",
      globalCompositeOperation: "source-over",
      points: [x, y],
    });
    layer.current.add(line);
  };

  const draw = () => {
    if (!isDrawing) return;
    let { x, y } = layer.current.getStage().getPointerPosition();
    line.points(line.points().concat([x, y]));
    layer.current.batchDraw();
  };

  const end = () => {
    line.cache();
    isDrawing = false;
  };

  return { start, draw, end };
};
