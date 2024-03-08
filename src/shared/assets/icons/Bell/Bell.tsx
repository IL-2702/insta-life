import * as React from 'react'
import { SVGProps, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg height={24} width={24} xmlns={'http://www.w3.org/2000/svg'} {...props}>
    <path
      d={
        'm2.516 14 1.18-1.184c.378-.375.585-.879.585-1.414V6.727c0-1.356.59-2.653 1.621-3.555a4.644 4.644 0 0 1 3.735-1.129c2.328.309 4.082 2.41 4.082 4.895v4.464c0 .536.207 1.04.586 1.414L15.485 14ZM11 16.34c0 .898-.918 1.66-2 1.66-1.086 0-2-.762-2-1.66V16h4Zm6.52-3.133-1.801-1.805V6.938c0-3.481-2.5-6.438-5.82-6.88a6.727 6.727 0 0 0-5.317 1.61 6.72 6.72 0 0 0-2.3 5.059v4.675L.48 13.207a1.626 1.626 0 0 0-.355 1.781A1.627 1.627 0 0 0 1.637 16H5v.34C5 18.36 6.793 20 9 20s4-1.64 4-3.66V16h3.363c.664 0 1.254-.395 1.508-1.008a1.628 1.628 0 0 0-.351-1.785Zm0 0'
      }
      style={{
        fill: '#fff',
        fillOpacity: 1,
        fillRule: 'evenodd',
        stroke: 'none',
      }}
    />
  </svg>
)

export const Bell = memo(SvgComponent)
