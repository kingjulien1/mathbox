import { createContext, Dispatch, SetStateAction } from "react";
import { PlatformPath } from "path";

export const Palette = {
  default: "#1A202C",
  red: "#F56565",
  orange: "#ED8936",
  yellow: "#ECC94B",
  green: "#48BB78",
  teal: "#38B2AC",
  blue: "#4299E1",
  indigo: "#667EEA",
  purple: "#9F7AEA",
} as const;

export type ColorNames = keyof typeof Palette;

export type Colors = typeof Palette[ColorNames];

export const ToolNames = [
  "pen",
  "palette",
  "eraser",
  "functions",
  "equations",
  "drag",
  "export",
] as const;

export interface ToolOptions {
  strokeWidth?: number;
  stroke?: Colors;
}

export type Tools = { name: typeof ToolNames[number]; options?: ToolOptions };

interface ToolBoxContextProps {
  currentTool: Tools;
  setCurrentTool?: Dispatch<SetStateAction<Tools>>;
}

export const ToolsContext = createContext<ToolBoxContextProps>(null);
