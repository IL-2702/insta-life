import { ElementRef, forwardRef } from 'react'

import { clsx } from 'clsx'
import { useRouter } from 'next/router'

import s from './GoBack.module.scss'

import { ArrowBack } from '../../assets/icons/arrow-back/arrow-back'
import { Typography } from '../../ui/typography'
import { Button } from '../button'

type Props = {
  className?: string
  title: string
  to?: string
}

export const GoBack = forwardRef<ElementRef<typeof Button>, Props>(({ className, title, to }) => {
  const goBackClassName = clsx(s.root, className)

  const router = useRouter()

  const onBack = () => {
    to ? router.push(to) : router.back()
  }

  return (
    <Button onClick={onBack} variant={'link'}>
      <div className={goBackClassName}>
        <ArrowBack />
        <Typography variant={'regular14'}>{title}</Typography>
      </div>
    </Button>
  )
})
