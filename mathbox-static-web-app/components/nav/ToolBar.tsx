import { useContext, FunctionComponent, Dispatch, useState, createContext, useMemo, useRef, useEffect } from 'react'
import { ToolsContext, Tool } from '../../Context'
import { ToolItemProps, tools } from './Tools'

export const activeToolItem = createContext<{ active: Tool; setActive: Dispatch<Tool> }>(null)

const ToolItem: FunctionComponent<ToolItemProps> = ({ Icon, Menu, tool }) => {
  const { setTool } = useContext(ToolsContext)
  const { active, setActive } = useContext(activeToolItem)
  const [isOpen, setIsOpen] = useState(false)
  const isActive = useMemo(() => active === tool, [active])
  const isOpenMemo = useMemo(() => isOpen && isActive, [isOpen, isActive])

  console.log('rerender')
  return (
    <div>
      <Menu isOpen={isOpenMemo}></Menu>
      <Icon
        className={`h-4 w-4 fill-current my-4 cursor-pointer focus:outline-none hover:text-blue-700 focus:text-blue-700 ${
          isActive ? 'text-blue-500' : ''
        }`}
        tabIndex={1}
        onClick={() => {
          setTool(tool)
          if (isActive) setIsOpen((io) => !io)
          setActive(tool)
        }}
      ></Icon>
    </div>
  )
}

export default function ToolBar() {
  const [active, setActive] = useState<Tool>('pen')
  return (
    <nav className="ml-4 px-2 my-2 mx-2 flex flex-col items-center text-gray-900 sm:justify-between absolute top-0 left-0 z-10 rounded-lg bg-gray-100 shadow-lg">
      <activeToolItem.Provider value={{ active, setActive }}>
        {tools.map((toolItem, index) => (
          <ToolItem key={index} {...{ ...toolItem }}></ToolItem>
        ))}
      </activeToolItem.Provider>
    </nav>
  )
}
