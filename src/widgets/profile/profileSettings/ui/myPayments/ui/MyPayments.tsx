import { memo } from 'react'

import { MyPaymentsProps } from '@/widgets/profile/profileSettings/ui/myPayments/container'

import s from './MyPayments.module.scss'

export const MyPayments = memo(({}: MyPaymentsProps) => {
  return <div className={s.container}>MyPayments</div>
})
