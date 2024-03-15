import { memo } from 'react'

import { Spinner } from '@/shared/ui/Spinner'
import { RecoveryProps } from '@/widgets/auth/recovery/container'

import s from './Recovery.module.scss'

export const Recovery = memo(({}: RecoveryProps) => {
  return (
    <div className={s.container}>
      <Spinner />
    </div>
  )
})
