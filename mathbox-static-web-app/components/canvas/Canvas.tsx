import { useContext, useRef, useEffect, useState } from "react";
import Konva from "konva";
import { Layer } from "konva/types/Layer";
import { ToolsContext } from "../../Context";
import { usePen } from "./usePen";
import { Stage } from "konva/types/Stage";

export default function Canvas() {
  const { currentTool } = useContext(ToolsContext);

  const layerRef = useRef<Layer>();
  const stageRef = useRef<Stage>();

  const [startDrawing, draw, finishDrawing] = usePen(
    layerRef,
    currentTool.options
  );

  useEffect(() => {
    //set height at mounting time
    stageRef.current = new Konva.Stage({
      height: window.innerHeight,
      width: window.innerWidth,
      container: "stage",
    });
    //create and add layer
    layerRef.current = new Konva.Layer();
    stageRef.current.add(layerRef.current);
  }, []);

  useEffect(() => {
    switch (currentTool.name) {
      case "pen":
        stageRef.current
          .on("mousedown touchstart", startDrawing)
          .on("mousemove touchmove", draw)
          .on("mouseup touchend", finishDrawing);
        break;
      case "eraser":
        break;
    }
  }, [currentTool]);

  return <div id="stage"></div>;
}
