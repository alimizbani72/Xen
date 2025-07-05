'use client'

import { useEffect, useRef } from 'react'
import { Box } from '@mui/material'

interface DustBackgroundProps {
  numParticles?: number
}

export default function DustBackground({ numParticles = 80 }: DustBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const spans: HTMLSpanElement[] = []

    for (let i = 0; i < numParticles; i++) {
      const span = document.createElement('span')
      const size = Math.random() * 2 + 1 // 1‒3px
      span.style.width = `${size}px`
      span.style.height = `${size}px`
      span.style.top = `${Math.random() * 100}%`
      span.style.left = `${Math.random() * 100}vw`
      span.style.animationDuration = `${6 + Math.random() * 10}s`
      span.style.animationDelay = `${Math.random() * 5}s`
      container.appendChild(span)
      spans.push(span)
    }

    return () => {
      spans.forEach(span => span.remove())
    }
  }, [numParticles])

  return (
    <>
      <Box
        ref={containerRef}
        className="dust"
        sx={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          inset: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
          '& > span': {
            position: 'absolute !important',
            background: 'rgba(255, 255, 255, 0.35)',
            borderRadius: '50%',
          },
        }}
      />
    </>
  )
}
