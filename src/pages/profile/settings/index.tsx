import { getBaseLayout } from '@/layouts/publ/BaseLayout'
import { UploadUserPhoto } from '@/widgets/profile/uploadUserPhoto'

export default function ProfileSettings() {
  return (
    <div>
      Profile Settings
      <UploadUserPhoto.widget />
    </div>
  )
}
ProfileSettings.getLayout = getBaseLayout
