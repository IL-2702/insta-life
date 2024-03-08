import * as React from 'react'
import { SVGProps, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg height={24} width={24} xmlns={'http://www.w3.org/2000/svg'} {...props}>
    <path
      d={
        'M6.09 21.059a1 1 0 0 1-1-1L4.94 5.399a2.276 2.276 0 0 1 .137-.872c.102-.28.262-.539.465-.754a2.243 2.243 0 0 1 1.578-.722L16.711 3a2.27 2.27 0 0 1 2.23 2.309l.137 14.66a.971.971 0 0 1-.125.5.975.975 0 0 1-.863.504.978.978 0 0 1-.5-.133l-5.7-3.16-5.288 3.23c-.16.086-.332.137-.512.149Zm5.762-5.547c.171 0 .343.039.5.117l4.707 2.61-.118-12.95c0-.2-.132-.34-.21-.328l-9.602.09c-.078 0-.188.129-.188.328L7.06 18.28l4.28-2.633c.157-.085.333-.136.513-.136Zm0 0'
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

export const BookMark = memo(SvgComponent)
