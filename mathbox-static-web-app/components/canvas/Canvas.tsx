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
  console.log('canvas rr', { options })

  const optionsRef = useRef<Options>(options)
  const layerRef = useRef<Layer>()
  const stageRef = useRef<Stage>()

  useEffect(() => {
    optionsRef.current = options
  }, [options])

  useEffect(() => {
    //set height at mounting time
    stageRef.current = new Konva.Stage({
      height: window.innerHeight,
      width: window.innerWidth,
      container: 'stage',
    })
    //create and add layer
    layerRef.current = new Konva.Layer()
    stageRef.current.add(layerRef.current)
  }, [])

  const [startDrawing, draw, finishDrawing] = usePen(layerRef, optionsRef)
  const [startErasing, erase, finishErasing] = useEraser(layerRef, optionsRef)

  useEffect(() => {
    stageRef.current.removeEventListener('mousedown touchstart mousemove touchmove mouseup touchend')
    if (tool === 'pen') {
      stageRef.current.on('mousedown touchstart', startDrawing).on('mousemove touchmove', draw).on('mouseup touchend', finishDrawing)
    } else if (tool) {
      stageRef.current.on('mousedown touchstart', startErasing).on('mousemove touchmove', erase).on('mouseup touchend', finishErasing)
    }
  }, [tool])

  return <div id="stage"></div>
}
