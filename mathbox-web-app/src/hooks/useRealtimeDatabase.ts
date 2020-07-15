import { useState } from "react";
import { database } from "../firebase";

export const useStrokeInteraction = () => {
  const [strokeRef, setStrokeRef] = useState<
    firebase.database.ThenableReference | undefined
  >();
  const strokesRef = database.ref("board1/strokes");
  let dbconstraint = 0;

  const beginStroke = (x: number, y: number) => {
    const newStrokeRef = strokesRef.push();
    newStrokeRef.push({ x, y });
    setStrokeRef(newStrokeRef);
  };

  const pushToCurrentStroke = (x: number, y: number) => {
    if ((dbconstraint += 1) < 2) {
      strokeRef?.push({ x, y });
    }
  };

  return { beginStroke, pushToCurrentStroke };
};
