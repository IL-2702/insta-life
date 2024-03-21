import { ProfileHeaderProps } from '@/widgets/profile/profileHeader/container'
import { Avatar } from '@/widgets/profile/profileHeader/ui/Avatar/Avatar'

export const ProfileHeader = ({ avatar }: ProfileHeaderProps | any) => {
  return (
    <div>
      <Avatar avatar={avatar} />
      Profile Info
    </div>
  )
}
