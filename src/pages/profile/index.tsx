import { getBaseLayout } from '@/layouts/publ/BaseLayout/BaseLayout'
import { ProfileInfo } from '@/widgets/profile/profileInfo'

const ProfilePage = () => {
  return (
    <div>
      <ProfileInfo.widget />
    </div>
  )
}

ProfilePage.getLayout = getBaseLayout
export default ProfilePage
