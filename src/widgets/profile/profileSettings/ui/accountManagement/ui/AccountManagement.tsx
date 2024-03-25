import { memo } from 'react'

import { AccountManagementProps } from '@/widgets/profile/profileSettings/ui/accountManagement/container'

import s from './AccountManagement.module.scss'

export const AccountManagement = memo(({}: AccountManagementProps) => {
  return <div className={s.container}>Devices</div>
})
