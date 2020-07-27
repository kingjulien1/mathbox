import React, { useState, RefObject, useRef } from "react";
import Konva from "konva";
import { Line } from "konva/types/shapes/Line";
import { Layer } from "konva/types/Layer";

export const usePen = (layerRef: RefObject<Layer>) => {
  console.log("rerender");
  const isDrawing = useRef(false);
  const line = useRef<Line>(null);

  const startDrawing = () => {
    isDrawing.current = true;
    let { x, y } = layerRef.current.getStage().getPointerPosition();

    line.current = new Konva.Line({
      strokeWidth: 2,
      stroke: "#1A202C",
      bezier: true,
      globalCompositeOperation: "source-over",
      points: [x, y],
    });

    layerRef.current.add(line.current);
  };

  const draw = () => {
    if (!isDrawing.current) return;
    let { x, y } = layerRef.current.getStage().getPointerPosition();
    line.current.points(line.current.points().concat([x, y]));
    layerRef.current.batchDraw();
  };

  const finishDrawing = () => {
    isDrawing.current = false;
    line.current?.cache();
    line.current = null;
  };

  return { startDrawing, draw, finishDrawing };
};
