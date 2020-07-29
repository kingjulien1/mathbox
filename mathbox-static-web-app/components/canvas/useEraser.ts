import { RefObject, useRef } from 'react'
import { Stage } from 'konva/types/Stage'
import { Options } from '../../Context'

export const useEraser = (stageRef: RefObject<Stage>, optionsRef: RefObject<Options>) => {
  const isErasing = useRef(false)

  const start = () => (isErasing.current = true)
  const erase = () => {
    if (!isErasing.current) return
    let position = stageRef.current.getPosition()
    let shape = stageRef.current.getIntersection(position)
    console.log({ shape })
    shape?.destroy()
  }
  const end = () => (isErasing.current = false)
  return [start, erase, end]
}
