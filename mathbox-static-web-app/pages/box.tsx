import { useState } from 'react'
import Head from 'next/head'
import ToolBar from '../components/nav/ToolBar'
import Canvas from '../components/canvas/Canvas'
import { defaultOptions } from '../components/canvas/usePen'
import { Tool, ToolsContext, Options, OptionsContext } from '../Context'

export default function Box({ props }) {
  const [tool, setTool] = useState<Tool>('pen')
  const [options, setOptions] = useState<Options>(defaultOptions)
  return (
    <div className="h-screen flex flex-col">
      <Head>
        <title>Box</title>
      </Head>
      <ToolsContext.Provider value={{ setTool }}>
        <OptionsContext.Provider value={{ options, setOptions }}>
          <ToolBar></ToolBar>
        </OptionsContext.Provider>
      </ToolsContext.Provider>
      <ToolsContext.Provider value={{ tool }}>
        <OptionsContext.Provider value={{ options }}>
          <Canvas></Canvas>
        </OptionsContext.Provider>
      </ToolsContext.Provider>
    </div>
  )
}
