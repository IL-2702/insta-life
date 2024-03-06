import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { clsx } from 'clsx'

import s from './Container.module.scss'

export const Container = forwardRef<ElementRef<'div'>, ComponentPropsWithoutRef<'div'>>(
  // eslint-disable-next-line no-undef
  ({ className, ...restProps }, ref): JSX.Element => {
    const containerClasses = clsx(s.root, className)

    return <div className={containerClasses} ref={ref} {...restProps} />
  }
)
