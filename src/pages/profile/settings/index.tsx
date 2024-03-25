import { getBaseLayout } from '@/layouts/publ/BaseLayout'
import { ProfileSettings } from '@/widgets/profile/profileSettings'

const ProfileSettingsPage = () => {
  return <ProfileSettings.widget />
}

export default ProfileSettingsPage
ProfileSettingsPage.getLayout = getBaseLayout
