import { ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './Wrapper.module.scss'

export const Wrapper = ({ children, className }: Props) => {
  return <div className={clsx(s.wrapper, className)}>{children}</div>
}

type Props = {
  children: ReactNode
  className?: string
}
