import { createContext, Dispatch, SetStateAction } from 'react'

export const Palette = {
  default: '#1A202C',
  red: '#F56565',
  orange: '#ED8936',
  yellow: '#ECC94B',
  green: '#48BB78',
  teal: '#38B2AC',
  blue: '#4299E1',
  indigo: '#667EEA',
  purple: '#9F7AEA',
} as const

export type ColorNames = keyof typeof Palette

export type Color = typeof Palette[ColorNames]

//tool context
export const ToolNames = ['pen', 'eraser', 'functions', 'equations', 'drag', 'export'] as const

export type Tool = typeof ToolNames[number]

export const ToolsContext = createContext<{
  tool?: Tool
  setTool?: Dispatch<SetStateAction<Tool>>
}>(null)

//options context
export interface Options {
  stroke: Color
  strokeWidth: number
  eraserWidth: number
}

export const OptionsContext = createContext<{
  options?: Options
  setOptions?: Dispatch<SetStateAction<Options>>
}>(null)
