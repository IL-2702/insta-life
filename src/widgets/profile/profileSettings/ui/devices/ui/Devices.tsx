import { memo } from 'react'

import { DevicesProps } from '@/widgets/profile/profileSettings/ui/devices/container'

import s from './Devices.module.scss'

export const Devices = memo(({}: DevicesProps) => {
  return <div className={s.container}>Devices</div>
})
