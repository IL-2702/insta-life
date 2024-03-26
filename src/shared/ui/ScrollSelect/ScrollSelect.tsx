import { CSSProperties, ReactNode } from 'react'

import * as ScrollArea from '@radix-ui/react-scroll-area'
import clsx from 'clsx'

import s from './ScrollSelect.module.scss'

type ScrollBarProps = {
  children: ReactNode
  className?: string
  maxHeight?: CSSProperties['maxHeight']
  maxWidth?: CSSProperties['maxWidth']
  type?: 'always' | 'auto' | 'hover' | 'scroll'
}

export const ScrollSelect = ({
  children,
  className,
  maxHeight = '100%',
  maxWidth = '100%',
  type,
}: ScrollBarProps) => {
  const classNames = {
    root: clsx(s.root, className),
  }
  const viewPortStyles = { maxHeight, maxWidth }

  return (
    <ScrollArea.Root asChild type={type}>
      <div className={classNames.root}>
        <ScrollArea.Viewport className={s.viewport} style={viewPortStyles}>
          {children}
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar className={s.scrollbar} orientation={'vertical'}>
          <ScrollArea.Thumb className={s.thumb} />
        </ScrollArea.Scrollbar>
        <ScrollArea.Scrollbar className={s.scrollbar} orientation={'horizontal'}>
          <ScrollArea.Thumb className={s.thumb} />
        </ScrollArea.Scrollbar>
      </div>
    </ScrollArea.Root>
  )
}
