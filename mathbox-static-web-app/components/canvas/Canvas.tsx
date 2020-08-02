import { useContext, useRef, useEffect } from 'react'
import { Layer } from 'konva/types/Layer'
import { Stage } from 'konva/types/Stage'
import Konva from 'konva'
import { ToolsContext, OptionsContext, Options } from '../../Context'
import { usePen } from './usePen'
import { useEraser } from './useEraser'

export default function Canvas() {
  const { tool } = useContext(ToolsContext)
  const { options } = useContext(OptionsContext)

  const optionsRef = useRef<Options>(options)
  const layerRef = useRef<Layer>()
  const stageRef = useRef<Stage>()

  useEffect(() => {
    optionsRef.current = options
  }, [options])

  useEffect(() => {
    //set height at mounting time
    let { innerHeight: height, innerWidth: width } = window
    stageRef.current = new Konva.Stage({ height, width, container: 'stage' })
    //create and add layer
    layerRef.current = new Konva.Layer()
    stageRef.current.add(layerRef.current)
  }, [])

  //eventlisteners
  const [penStart, pen, penEnd] = usePen(layerRef, optionsRef)
  const [eraserStart, eraser, eraserEnd] = useEraser(layerRef, optionsRef)
  const handlerStart = useRef(penStart)
  const handler = useRef(pen)
  const handlerEnd = useRef(penEnd)

  //change handlers if function changes
  useEffect(() => {
    stageRef.current.draggable(false)
    if (tool === 'pen') [handlerStart.current, handler.current, handlerEnd.current] = [penStart, pen, penEnd]
    else if (tool === 'eraser') [handlerStart.current, handler.current, handlerEnd.current] = [eraserStart, eraser, eraserEnd]
    else if (tool === 'drag') stageRef.current.draggable(true)
  }, [tool])

  //add Eventhandlers
  useEffect(() => {
    stageRef.current
      .on('mousedown touchstart', () => handlerStart.current())
      .on('mousemove touchmove', () => handler.current())
      .on('mouseup touchend', () => handlerEnd.current())
  }, [])

  return <div id="stage"></div>
}
