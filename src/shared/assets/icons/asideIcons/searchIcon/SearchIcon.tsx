import * as React from 'react'
import { SVGProps, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg height={24} width={24} xmlns={'http://www.w3.org/2000/svg'} {...props}>
    <path
      d={
        'm20.71 19.29-3.401-3.392A7.895 7.895 0 0 0 19 11a7.995 7.995 0 0 0-4.938-7.39 8.008 8.008 0 0 0-4.625-.458 7.977 7.977 0 0 0-4.093 2.192 7.977 7.977 0 0 0-2.192 4.093 8.008 8.008 0 0 0 3.403 8.215A8.006 8.006 0 0 0 11 19a7.895 7.895 0 0 0 4.898-1.691l3.391 3.402a.986.986 0 0 0 .711.293.983.983 0 0 0 .71-.293.986.986 0 0 0 .294-.711.983.983 0 0 0-.293-.71ZM5 11a6 6 0 0 1 3.703-5.543 5.992 5.992 0 0 1 3.469-.34c1.164.23 2.23.801 3.07 1.64.84.84 1.41 1.907 1.64 3.071a5.992 5.992 0 0 1-2.55 6.16A5.982 5.982 0 0 1 11 17a6.002 6.002 0 0 1-6-6Zm0 0'
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

export const SearchIcon = memo(SvgComponent)
