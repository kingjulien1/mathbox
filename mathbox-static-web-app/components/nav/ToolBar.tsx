import { useContext, FunctionComponent, Dispatch, SetStateAction, useState, useCallback } from 'react'
import { ToolsContext, Tool, OptionsContext, Options } from '../../Context'
import { MenuProps, PenMenu, EraserMenu, FunctionMenu, EquationMenu, DragMenu, ExportMenu } from './Menu'
import Pen from '../../public/icons/pen.svg'
import Eraser from '../../public/icons/eraser.svg'
import Functions from '../../public/icons/functions.svg'
import Omega from '../../public/icons/omega.svg'
import Drag from '../../public/icons/drag.svg'
import Export from '../../public/icons/download.svg'

interface ToolItemProps {
  tool: Tool
  active?: boolean
  setTool?: Dispatch<SetStateAction<Tool>>
  setOptions?: Dispatch<SetStateAction<Options>>
  Icon: FunctionComponent<React.SVGAttributes<SVGElement>>
  Menu: FunctionComponent<MenuProps>
}

const tools: ToolItemProps[] = [
  { Icon: Pen, Menu: PenMenu, tool: 'pen' },
  { Icon: Eraser, Menu: EraserMenu, tool: 'eraser' },
  { Icon: Functions, Menu: FunctionMenu, tool: 'functions' },
  { Icon: Omega, Menu: EquationMenu, tool: 'equations' },
  { Icon: Drag, Menu: DragMenu, tool: 'drag' },
  { Icon: Export, Menu: ExportMenu, tool: 'export' },
]

const ToolItem: FunctionComponent<ToolItemProps> = ({ Icon, setTool, active, Menu, tool }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <Menu {...{ isOpen, setIsOpen }}></Menu>
      <Icon
        className={`h-4 w-4 fill-current my-4 cursor-pointer focus:outline-none hover:text-blue-700 focus:text-blue-700 ${
          active ? 'text-blue-500' : ''
        }`}
        tabIndex={1}
        onClick={() => {
          //toggle menu
          setIsOpen((io) => !io)
          //set current tool
          setTool(tool)
        }}
      ></Icon>
    </div>
  )
}

export default function ToolBar() {
  const { setTool } = useContext(ToolsContext)
  console.log('toolbar rr')
  return (
    <nav className="ml-4 px-2 my-2 mx-2 flex flex-col items-center text-gray-900 sm:justify-between absolute top-0 left-0 z-10 rounded-lg bg-gray-100 shadow-lg">
      {tools.map((toolItem, index) => (
        <ToolItem key={index} {...{ ...toolItem, setTool }}></ToolItem>
      ))}
    </nav>
  )
}
