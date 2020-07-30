import { RefObject, useRef, memo } from 'react'
import Konva from 'konva'
import { Line } from 'konva/types/shapes/Line'
import { Layer } from 'konva/types/Layer'
import { Palette, Options } from '../../Context'

export const defaultLineConfig = {
  bezier: true,
  draggable: true,
  hitStrokeWidth: 10,
  globalCompositeOperation: 'source-over',
} as const

export const defaultOptions: Options = {
  stroke: Palette.default,
  strokeWidth: 2,
  eraserWidth: 2,
} as const

export const usePen = (layerRef: RefObject<Layer>, optionsRef: RefObject<Options>) => {
  const isDrawing = useRef(false)
  const line = useRef<Line>(null)

  const start = () => {
    isDrawing.current = true
    let { x, y } = layerRef.current.getStage().getPointerPosition()
    line.current = new Konva.Line({
      ...defaultLineConfig,
      ...optionsRef.current,
      points: [x, y],
    })
    layerRef.current.add(line.current)
  }

  const draw = () => {
    if (!isDrawing.current) return
    let { x, y } = layerRef.current.getStage().getPointerPosition()
    line.current.points([...line.current.points(), x, y])
    layerRef.current.batchDraw()
  }

  const end = () => {
    isDrawing.current = false
    line.current?.cache()
  }

  return [start, draw, end]
}
