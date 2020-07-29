import { useContext, useRef, useEffect } from 'react'
import Konva from 'konva'
import { Layer } from 'konva/types/Layer'
import { ToolsContext, OptionsContext, Options } from '../../Context'
import { usePen } from './usePen'
import { Stage } from 'konva/types/Stage'

export default function Canvas() {
  const { tool } = useContext(ToolsContext)
  const { options } = useContext(OptionsContext)

  const optionsRef = useRef<Options>(options)
  const layerRef = useRef<Layer>()
  const stageRef = useRef<Stage>()

  useEffect(() => {
    optionsRef.current = options
  }, [options])

  const [startDrawing, draw, finishDrawing] = usePen(layerRef, optionsRef)

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

  useEffect(() => {
    switch (tool) {
      case 'pen':
        //add listeners for pen tool
        stageRef.current.on('mousedown touchstart', startDrawing).on('mousemove touchmove', draw).on('mouseup touchend', finishDrawing)
        break
      case 'eraser':
        break
    }
  }, [tool])

  return <div id="stage"></div>
}
