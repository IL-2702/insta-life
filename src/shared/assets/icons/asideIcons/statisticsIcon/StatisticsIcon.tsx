import * as React from 'react'
import { SVGProps, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg height={24} width={24} xmlns={'http://www.w3.org/2000/svg'} {...props}>
    <path
      d={
        'M21 7a.641.641 0 0 0-.14-.52.846.846 0 0 0-.141-.171l-.117-.07a.739.739 0 0 0-.192-.098h-.2A.766.766 0 0 0 20 6h-5a1 1 0 1 0 0 2h2.832l-4 4.71-4.32-2.57a1 1 0 0 0-.684-.124.985.985 0 0 0-.598.343l-5 6a.986.986 0 0 0-.226.735.984.984 0 0 0 .355.676 1.006 1.006 0 0 0 1.41-.13l4.45-5.34 4.27 2.56c.202.12.44.163.675.128.23-.039.441-.16.598-.34L19 9.7V12a1 1 0 1 0 2 0Zm0 0'
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

export const StatisticsIcon = memo(SvgComponent)
