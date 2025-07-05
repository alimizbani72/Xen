'use client'

import { useEffect, useRef } from 'react'

export default function GridBackgroundAbsolute({ cell = 96, stroke = 1, color = 'rgba(255,255,255,0.04)' }) {
  const ref = useRef<HTMLDivElement>(null)

  const createBackground = () => {
    const wrapper = ref.current
    if (!wrapper) return
    wrapper.innerHTML = ''

    const { clientWidth: w, clientHeight: h } = wrapper
    ref.current?.parentElement?.setAttribute('style', 'z-index:1')

    for (let x = 0; x <= w; x += cell) {
      const vLine = document.createElement('div')
      vLine.style.cssText = `
        position:absolute; top:0; left:${x}px;
        width:${stroke}px; height:100%;
        background:${color};
      `
      wrapper.appendChild(vLine)
    }

    for (let y = 2; y <= 3; y += 1) {
      const hLine = document.createElement('div')
      hLine.style.cssText = `
        position:absolute; left:0; top:${cell * y - 50}px;
        width:100%; height:${stroke}px;
        background:${color};
      `
      wrapper.appendChild(hLine)
    }
    for (let y = 2; y <= 3; y += 1) {
      const hLine = document.createElement('div')
      hLine.style.cssText = `
        position:absolute; left:0; top:${h - cell * y + 50}px;
        width:100%; height:${stroke}px;
        background:${color};
      `
      wrapper.appendChild(hLine)
    }
  }

  useEffect(() => {
    createBackground()

    if (window) window?.addEventListener('resize', createBackground)

    return () => window?.removeEventListener('resize', createBackground)
  }, [cell, stroke, color])

  return (
    <>
      <div
        ref={ref}
        className="grid-abs"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: -1,
        }}
      />
    </>
  )
}
