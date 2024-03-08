import * as React from 'react'
import { SVGProps, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg height={24} width={24} xmlns={'http://www.w3.org/2000/svg'} {...props}>
    <path
      d={
        'M12 11a3.98 3.98 0 0 0 2.223-.676 3.982 3.982 0 0 0 1.472-1.793c.305-.73.383-1.535.227-2.312a3.993 3.993 0 0 0-3.14-3.14 3.971 3.971 0 0 0-2.313.226c-.73.3-1.356.816-1.793 1.472A3.997 3.997 0 0 0 12 11Zm0-6a2.002 2.002 0 0 1 1.96 2.39 2.004 2.004 0 0 1-1.57 1.57c-.386.08-.788.04-1.156-.112a2.002 2.002 0 0 1-.648-3.262A1.999 1.999 0 0 1 12 5ZM12 13a7.002 7.002 0 0 0-7 7 1 1 0 1 0 2 0 5.003 5.003 0 0 1 5-5 5.003 5.003 0 0 1 5 5 1 1 0 1 0 2 0 7.002 7.002 0 0 0-7-7Zm0 0'
      }
      style={{
        fill: '#fff',
        fillOpacity: 1,
        fillRule: 'nonzero',
        stroke: 'none',
      }}
    />
  </svg>
)

export const ProfileIcon = memo(SvgComponent)
