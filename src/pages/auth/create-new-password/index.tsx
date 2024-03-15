import { getBaseLayout } from '@/layouts/publ/BaseLayout'
import { CreateNewPassword } from '@/widgets/auth/createNewPassword'

const CreateNewPasswordPage = () => {
  return <CreateNewPassword.widget />
}

export default CreateNewPasswordPage
CreateNewPasswordPage.getLayout = getBaseLayout
