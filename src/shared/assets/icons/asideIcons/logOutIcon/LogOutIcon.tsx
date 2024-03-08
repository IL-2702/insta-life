import * as React from 'react'
import { SVGProps, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg height={24} width={24} xmlns={'http://www.w3.org/2000/svg'} {...props}>
    <path
      d={
        'M7 6a1 1 0 1 0 0-2H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h2a1 1 0 1 0 0-2H6V6ZM20.82 11.422l-2.82-4a1.003 1.003 0 0 0-.645-.41 1.012 1.012 0 0 0-.746.168.94.94 0 0 0-.27.285.94.94 0 0 0-.14.363.958.958 0 0 0 .012.395c.027.129.082.25.16.355L18.09 11H10a1 1 0 1 0 0 2h8l-1.8 2.398a1.007 1.007 0 0 0-.188.743.938.938 0 0 0 .129.367A.976.976 0 0 0 17 17a.971.971 0 0 0 .445-.105c.14-.07.262-.172.356-.293l3-4a.996.996 0 0 0 .02-1.18Zm0 0'
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

export const LogOutIcon = memo(SvgComponent)
