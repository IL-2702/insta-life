import { getBaseLayout } from '@/layouts/publ/BaseLayout/BaseLayout'
import { ProfileHeader } from '@/widgets/profile/profileHeader'

const ProfilePage = () => {
  return (
    <div>
      <ProfileHeader.widget />
    </div>
  )
}

ProfilePage.getLayout = getBaseLayout
export default ProfilePage
