'use client'
import { Alignment } from '@rive-app/react-canvas'
import dynamic from 'next/dynamic'
import type { FC } from 'react'

const RiveLoader = dynamic(() => import('./RiveLoader'), {
  ssr: false,
})

export type RiveCompProps = {
  src: string
  height?: number
  width?: number
  stateMachineName?: string
  inputName?: string
  onInputReady?: (input: any) => void
  alignment?: Alignment
}

const RiveComp: FC<RiveCompProps> = ({
  src,
  height,
  width,
  stateMachineName = 'State Machine 1',
  inputName = '',
  onInputReady,
  alignment,
}) => {
  return (
    <RiveLoader
      src={src}
      height={height}
      width={width}
      stateMachineName={stateMachineName}
      inputName={inputName}
      onInputReady={onInputReady}
      alignment={alignment}
    />
  )
}
export default RiveComp
