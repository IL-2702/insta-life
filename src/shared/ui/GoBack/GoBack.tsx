import { ElementRef, forwardRef } from 'react'

import ArrowBack from '@/shared/assets/icons/ArrowBack/ArrowBack'
import { clsx } from 'clsx'
import { useRouter } from 'next/router'

import s from './GoBack.module.scss'

import { Button } from '../Button'
import { Typography } from '../Typography'

type Props = {
  className?: string
  title: string
  to?: string
}

export const GoBack = forwardRef<ElementRef<typeof Button>, Props>(({ className, title, to }) => {
  const goBackClassName = {
    root: clsx(s.root, className),
    wrapper: s.wrapper,
  }

  const router = useRouter()

  const onBack = () => {
    to ? router.push(to) : router.back()
  }

  return (
    <Button className={goBackClassName.root} onClick={onBack} variant={'link'}>
      <div className={goBackClassName.wrapper}>
        <ArrowBack />
        <Typography variant={'regular14'}>{title}</Typography>
      </div>
    </Button>
  )
})
