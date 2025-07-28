'use client'

import type { FC, PropsWithChildren } from 'react'

import type { PartialOptions } from 'overlayscrollbars'
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react'
import 'overlayscrollbars/styles/overlayscrollbars.css'

interface CustomScrollbarProps extends PropsWithChildren {
  options?: PartialOptions
}

// ----------------------------------------------------------------------

const Scrollbar: FC<CustomScrollbarProps> = ({ children, options }) => {
  return (
    <OverlayScrollbarsComponent options={{ scrollbars: { autoHide: 'scroll' }, ...options }}>
      {children}
    </OverlayScrollbarsComponent>
  )
}

export default Scrollbar
