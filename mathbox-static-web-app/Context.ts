import { createContext } from "react";
export type Tool =
  | "pen"
  | "palette"
  | "eraser"
  | "functions"
  | "equations"
  | "drag"
  | "export"
  | "team";

export const CurrentToolContext = createContext<Tool>(null);

export const SetCurrentToolContext = createContext<(tool: Tool) => void>(null);
