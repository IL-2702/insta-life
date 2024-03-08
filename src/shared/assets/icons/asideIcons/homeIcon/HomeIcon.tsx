import * as React from 'react'
import { SVGProps, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg height={24} width={24} xmlns={'http://www.w3.org/2000/svg'} {...props}>
    <path
      d={
        'M20.422 10.18 12.71 2.3a.986.986 0 0 0-.328-.218.986.986 0 0 0-.766 0 .986.986 0 0 0-.328.219l-7.71 7.89c-.184.188-.333.41-.43.657A1.948 1.948 0 0 0 3 11.62V20c0 .512.195 1.004.547 1.375.351.375.832.598 1.344.625h14.218c.512-.027.993-.25 1.344-.625.352-.371.547-.863.547-1.375v-8.379a2.08 2.08 0 0 0-.578-1.441ZM10 20v-6h4v6Zm9 0h-3v-7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v7H5v-8.422l7-7.148 7 7.191Zm0 0'
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

export const HomeIcon = memo(SvgComponent)
