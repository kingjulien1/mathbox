import { MenuProps, PenMenu, EraserMenu, FunctionMenu, EquationMenu, DragMenu, ExportMenu } from './Menu'
import Pen from '../../public/icons/pen.svg'
import Eraser from '../../public/icons/eraser.svg'
import Functions from '../../public/icons/functions.svg'
import Omega from '../../public/icons/omega.svg'
import Drag from '../../public/icons/drag.svg'
import Export from '../../public/icons/download.svg'
import { Tool } from '../../Context'
import { FunctionComponent } from 'react'

export interface ToolItemProps {
  tool: Tool
  Icon: FunctionComponent<React.SVGAttributes<SVGElement>>
  Menu: FunctionComponent<MenuProps>
}

export const tools: ToolItemProps[] = [
  { Icon: Pen, Menu: PenMenu, tool: 'pen' },
  { Icon: Eraser, Menu: EraserMenu, tool: 'eraser' },
  { Icon: Functions, Menu: FunctionMenu, tool: 'functions' },
  { Icon: Omega, Menu: EquationMenu, tool: 'equations' },
  { Icon: Drag, Menu: DragMenu, tool: 'drag' },
  { Icon: Export, Menu: ExportMenu, tool: 'export' },
]
