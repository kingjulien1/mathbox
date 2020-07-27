import { useContext, useRef, useEffect, useState } from "react";
import { Stage } from "react-konva";
import { ToolsContext } from "../../Context";
import { usePen } from "../../hooks/usePen";
import Konva from "konva";
import { Layer } from "konva/types/Layer";

export default function Canvas() {
  const { currentTool } = useContext(ToolsContext);
  const stageRef = useRef<Stage>();
  const layerRef = useRef<Layer>();
  const { start, draw, end } = usePen(layerRef);

  useEffect(() => {
    //set height at mounting time
    stageRef.current.getStage().height(window.innerHeight);
    stageRef.current.getStage().width(window.innerWidth);
    layerRef.current = new Konva.Layer();
    stageRef.current.getStage().add(layerRef.current);
  }, []);

  useEffect(() => {
    stageRef.current.getStage().on("mousedown touchstart", start);
    stageRef.current.getStage().on("mousemove touchmove", draw);
    stageRef.current.getStage().on("mouseup touchend", end);
  }, [currentTool]);

  return <Stage ref={stageRef} className="flex-grow"></Stage>;
}
