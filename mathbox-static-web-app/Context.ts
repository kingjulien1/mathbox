import { createContext, Dispatch, SetStateAction } from "react";

export type Tool =
  | "pen"
  | "palette"
  | "eraser"
  | "functions"
  | "equations"
  | "drag"
  | "export"
  | "team";

interface ToolBoxContextProps {
  currentTool: Tool;
  setCurrentTool?: Dispatch<SetStateAction<Tool>>;
}

export const ToolsContext = createContext<ToolBoxContextProps>(null);
