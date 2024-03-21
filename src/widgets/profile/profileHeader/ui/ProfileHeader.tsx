import { ProfileHeaderProps } from '@/widgets/profile/profileHeader/container'
import { Avatar } from '@/widgets/profile/profileHeader/ui/Avatar/Avatar'

export const ProfileHeader = ({}: ProfileHeaderProps) => {
  return (
    <div>
      <Avatar />
      Profile Info
    </div>
  )
}
