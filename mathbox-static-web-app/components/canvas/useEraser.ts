import { RefObject, useRef } from 'react'
import { Options } from '../../Context'
import { Layer } from 'konva/types/Layer'

export const useEraser = (layerRef: RefObject<Layer>, optionsRef: RefObject<Options>) => {
  const isErasing = useRef(false)

  const start = () => (isErasing.current = true)
  const erase = () => {
    if (!isErasing.current) return
    let position = layerRef.current.getStage().getPointerPosition()
    let shape = layerRef.current.getStage().getIntersection(position)
    if (shape) {
      shape.destroy()
      layerRef.current.batchDraw()
    }
  }
  const end = () => (isErasing.current = false)
  return [start, erase, end]
}
