'use client'

import { Alignment, Fit, Layout, RuntimeLoader, useRive, useStateMachineInput } from '@rive-app/react-canvas'
import { type FC, useEffect } from 'react'

RuntimeLoader.setWasmUrl('/assets/rive.wasm')

type RiveCompProps = {
  src: string
  height?: number
  width?: number
  stateMachineName?: string
  inputName?: string
  onInputReady?: (input: any) => void
  alignment?: Alignment
}

const RiveLoader: FC<RiveCompProps> = ({
  src,
  height,
  width,
  stateMachineName = 'State Machine 1',
  inputName = '',
  onInputReady,
  alignment = Alignment.BottomCenter,
}) => {
  const { RiveComponent, rive } = useRive({
    src,
    stateMachines: stateMachineName,
    autoplay: true,
    layout: new Layout({
      fit: Fit.Cover, // Specify Fit.Layout to automatically resize the artboard.
      // layoutScaleFactor: 2, // x2 The Scale Factor
      alignment,
    }),
  })

  const input = useStateMachineInput(rive, stateMachineName, inputName)

  useEffect(() => {
    if (input && onInputReady) {
      onInputReady(input)
    }
  }, [input, onInputReady])

  return <RiveComponent style={{ width: width ?? '100%', height: height ?? '100%' }} />
}

export default RiveLoader
