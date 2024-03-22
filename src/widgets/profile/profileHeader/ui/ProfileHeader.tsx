import { ProfileHeaderProps } from '@/widgets/profile/profileHeader/container'
import { Avatar } from '@/widgets/profile/profileHeader/ui/Avatar/Avatar'
import { ProfileInfo } from '@/widgets/profile/profileHeader/ui/ProfileInfo/ProfileInfo'

import s from './ProfileHeader.module.scss'

export const ProfileHeader = ({ aboutMe, avatars, userName }: ProfileHeaderProps) => {
  return (
    <div className={s.wrapper}>
      <Avatar avatar={avatars[0]} />
      <ProfileInfo aboutMe={aboutMe} userName={userName} />
    </div>
  )
}
