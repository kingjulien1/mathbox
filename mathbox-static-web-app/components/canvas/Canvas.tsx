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

  const { startDrawing, draw, finishDrawing } = usePen(layerRef);

  useEffect(() => {
    //set height at mounting time
    stageRef.current = new Konva.Stage({
      height: window.innerHeight,
      width: window.innerWidth,
      container: "stage",
    });
    layerRef.current = new Konva.Layer();
    stageRef.current.add(layerRef.current);
  }, []);

  useEffect(() => {
    switch (currentTool) {
      case "pen":
        stageRef.current.getStage().on("mousedown touchstart", startDrawing);
        stageRef.current.getStage().on("mousemove touchmove", draw);
        stageRef.current.getStage().on("mouseup touchend", finishDrawing);
        break;
      case "eraser":
        break;
    }
  }, [currentTool]);

  return <div id="stage"></div>;
}
